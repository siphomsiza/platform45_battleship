class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_player!
  layout :choose_layout
  before_action :configure_permitted_parameters, if: :devise_controller?

  def choose_layout
    devise_controller?  ? "outside" :  "application"
  end

  def configure_permitted_parameters
    Rails.logger.info "configure_permitted_parameters"
    # Fields for sign up
    devise_parameter_sanitizer.permit(:sign_up, keys: [:id, :email, :name, :password, :password_confirmation])
  end

end
