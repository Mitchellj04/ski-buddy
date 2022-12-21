Rails.application.routes.draw do
  resources :users, only: [:create]
  # resources :comments
  resources :trails, only: [:index]
  resources :mountains, only: [:index, :show]
  post '/login', to: "sessions#create"
  # get '/auth', to: "user#show"
  get '/me', to: 'users#show'
  delete '/logout', to: 'sessions#destroy'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
