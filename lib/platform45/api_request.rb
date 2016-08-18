require 'net/http'
require 'uri'

module Platform45
  class << self
    def base_uri
     "http://battle.platform45.com"
      #"http://localhost"
    end
  end

  class APIRequest
    def full_uri(suffix)
      URI.parse("#{Platform45.base_uri}/#{suffix}")
    end

    def make_request(uri, params)
      http = Net::HTTP.new(uri.host, 80)
      # http = Net::HTTP.new(uri.host, 3200)

      http.set_debug_output($stdout)

      begin
        response = http.post(uri.path, JSON.unparse(params))
        Platform45::APIResponse.new self, response
      rescue Exception => e
        Platform45::APIResponse.new self, nil, e
      end
    end

    def nuke(params)
      uri = "/nuke"
      req = Net::HTTP::Post.new(uri) #, initheader = {'Content-Type' =>'application/json'})
      req.body = params.to_json
      resp = Net::HTTP.new(battle_host).start{|http| http.request(req)}
    end

    def battle_host
      "battle.platform45.com"
    end

    def register(name, email)
      uri = full_uri("register")

      make_request(uri, {"name" => name, "email" => email})
    end
  end
end
