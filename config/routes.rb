Rails.application.routes.draw do
  resources :games do
    collection do
      get 'update_game_grid'
    end
  end
  #get "/games/update_game_grid", :as => 'update_game_grid'

  devise_for :players

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  devise_scope :player do
    # root to: "devise/sessions#new"
    unauthenticated do
      root to: "devise/sessions#new"
    end
    authenticated do
      root to: "home#index" , as: :authenticated_root
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #root 'home#index'

  get 'system/unsubscribe', as: 'unsubscribe'
  get 'system/about_us', as: 'about_us'
  get 'system/privacy_policy', as: 'privacy_policy'
  get 'system/terms_of_use', as: 'terms_of_use'
  get 'system/contact_us', as: 'contact_us'
  get 'system/faq', as: 'faq'


end
