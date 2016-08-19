require_relative 'boot'
require File.expand_path('../boot', __FILE__)
require 'rails/all'
require './lib/platform45/api_request'
require './lib/platform45/api_response'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Platform45Battleship
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    # Custom directories with classes and modules you want to be autoloadable.
    config.autoload_paths += %W(#{config.root}/lib)
    config.generators do |g|
      g.test_framework      :rspec
    end
  end
end
