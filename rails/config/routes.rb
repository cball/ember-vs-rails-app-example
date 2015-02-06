Rails.application.routes.draw do
  resources :messages
  get 'profile' => 'welcome#profile'

  root 'welcome#index'

  namespace :api do
    resources :messages, only: [:index, :show]
    resources :users, only: [:show]
  end
end
