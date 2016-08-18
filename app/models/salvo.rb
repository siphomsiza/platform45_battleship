class Salvo < ApplicationRecord
  belongs_to :game,
  class_name: "Game",
  foreign_key: :platform45_game_id

  scope :mine, -> { where(:owner => "me") }
  scope :theirs, -> {where(:owner => "them")}
  scope :hits, -> {where(:state => "hit")}
  scope :misses, -> {where(:state => "miss")}

  scope :success, -> { where(:hit => true)}
  scope :enemy, -> { where(:enemy => true)}
  scope :ours, -> { where(:enemy => false)}
  scope :sunk, -> { where("sunk is not null")}
  scope :not_sunk, -> { where("sunk is null")}
  scope :missed, -> { where(:status => "miss")}
  scope :hit, -> { where(:status => "hit")}
  scope :non_sunk_hit, -> { hit.not_sunk } # hits to focus on when determining next nuke coords

  after_create :related_sinks

  def coordinates
    [x,y]
  end

  def self.next_shot
    if non_sunk_hit.count > 0 and (best_selection = (all_coordinates & available_coordinates)).any?
      # let's knock out ships that we have hits on
      return best_selection.first
    else
      #pick a random shot out of available grid spaces
      return available_coordinates.sample
    end
  end

  def self.available_coordinates
    all_coordinates = coordinates_grid(10,10)
    all_coordinates - ours.map(&:coordinates)
  end

  def self.coordinates_grid(num_x, num_y)
    coordinates = []
    num_x.times do |x|
      num_y.times do |y|
        coordinates << [x,y]
      end
    end
    coordinates
  end

  def related_sinks
    unless sunk.blank?
      # update :sunk for all shots associated with this shot
      shots_needed = game.ships.find_by_name(sunk).length
      logger.debug "need #{shots_needed} shots to sink the #{sunk}"
      # only need to look for others if we have shots needing updating
      if shots_needed > 1
        salvos = related_salvos(shots_needed)
        salvos.each{|s| s.update_attribute(:sunk, sunk)}
        return
      end
    end
  end

  def related_salvos(shots_needed)
    logger.debug "Looking for other shots to 'sink'"
    # find x and y salvos to compare with
    xs = game.salvos.ours.where(:x => x, :y => (y-shots_needed..y+shots_needed))
    ys = game.salvos.ours.where(:y => y, :x => (x-shots_needed..x+shots_needed))
    logger.debug "x direction 1: #{xs.inspect}"
    logger.debug "y direction 1: #{ys.inspect}"
    # look into the salvos and find the consecutive ones for each direction
    consecutive_xs = ys.map(&:x).sort.groupulate.find{|xss| xss.include?(x)}
    consecutive_ys = xs.map(&:y).sort.groupulate.find{|yss| yss.include?(y)}
    logger.debug "consecutive_x direction: #{consecutive_xs.inspect}"
    logger.debug "consecutive_y direction: #{consecutive_ys.inspect}"
    # update x's and y's based on the consecutive selection
    xs = game.salvos.ours.where(:x => x, :y => consecutive_ys)
    ys = game.salvos.ours.where(:y => y, :x => consecutive_xs)
    logger.debug "x direction 2: #{xs.inspect}"
    logger.debug "y direction 2: #{ys.inspect}"

    # figure out which salvos to focus on
    salvos = xs.count >= shots_needed ? xs : ys
    logger.debug "Determined salvos to be #{salvos.inspect}"
    salvos
  end

  def self.fires_status(x,y,status,sunk=nil)
    nuke_failed(x,y,status) if status == "miss"
    nuke_successful(x,y,status,sunk) if status == "hit"
  end

  def self.nuke_failed(x,y,status)
    logger.info "\033[0;31mFailed nuke - x: #{x}, y: #{y}\033[0;37m"
    create(:x => x, :y => y, :hit => false, :status => status)
  end

  def self.nuke_successful(x,y,status,sunk=nil)
    logger.info "\033[0;32mSuccessful nuke - x: #{x}, y: #{y}\033[0;37m"
    logger.info "\033[0;32mSunk one - #{sunk}\033[0;37m" if sunk
    create(:x => x, :y => y, :hit => true, :status => status, :sunk => sunk)
  end

  def self.received_enemy_fire(x,y)
    create(:x => x, :y => y, :enemy => true)
  end

  # the coordinates surrounding our hits (non sunk)
  def self.all_coordinates
    ours.non_sunk_hit.map(&:coordinates_around).flatten(1)
  end

  def coordinates_around
    [[x+1,y], [x-1,y], [x,y+1], [x,y-1]]
  end
end
