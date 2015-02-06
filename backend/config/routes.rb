Rails.application.routes.draw do
  resources :messages
  get 'profile' => 'welcome#profile'

  root 'welcome#index'
end
