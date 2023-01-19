Rails.application.routes.draw do
  resources :users, only: [:create, :update, :show]
  resources :comments, only: [:create, :destroy, :show, :update]
  resources :trails, only: [:index]
  resources :mountains, only: [:index, :show]
  post "/login", to: "sessions#create"
  # get '/auth', to: "user#show"
  get '/me', to: 'users#show'
  delete '/logout', to: 'sessions#destroy'
  post "/elevation", to: "mountains#practice"

 # Pass the value from the front end to the back end so that it can select the elevation based on n 
  # The value that is sent from /elevation/3200 will then get passed into Mountain.mountain_elevation n (where n is 3200)




  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
