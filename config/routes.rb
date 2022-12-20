Rails.application.routes.draw do
  resources :users, only: [:show, :create]
  # resources :comments
  resources :trails, only: [:index]
  resources :mountains, only: [:index, :show]
  post '/login', to: "sessions#create"
  # get '/auth', to: "user#show"
  get '/me', to: 'user#show'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
