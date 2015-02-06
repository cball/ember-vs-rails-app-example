Rails.application.routes.draw do
  resources :messages
  get 'profile' => 'welcome#profile'

  root 'welcome#index'

  namespace :api do
    resources :messages, only: [:index, :show, :update]
    resources :users, only: [:show]
  end
end
