window.onload = ->
  if $("#playing_game").length && $("#manual_play").length
    console.log $("#game_id").val()
    $.PeriodicalUpdater "update_game_grid",
      method: 'get'
      data: id: "#{$("#game_id").val()}"
      minTimeout: 1500
      maxTimeout: 4000
      format: "js"
jQuery ->
  $(".click_play").click ->
    console.log "yes"
    $(this).html('<i class="fa fa-refresh fa-lg fa-spin" style="color: #ffffff;"></i>')
