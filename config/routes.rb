Rails.application.routes.draw do
  resources :users, only: [:create, :update, :show]
  resources :comments, only: [:create, :destroy, :show, :update]
  resources :trails, only: [:index, :create]
  resources :mountains, only: [:index, :show, :create]
  post "/login", to: "sessions#create"
  # get '/auth', to: "user#show"
  get '/me', to: 'users#show'
  delete '/logout', to: 'sessions#destroy'

  get "/mountains_by_trails/:number_of_trails", to: "mountains#trails"


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"


  # Create a dynamic route (mountains_by_trails) that is set up to accept a parameter of a number. 
  # The JSON response should include an array of mountains where the number_trails is greater than the parameter that was included in the request. 
  # If no mountains meet the criteria, return a JSON response saying "No mountains found" under a key of error.


  # Create a route to the mountain controller 
  # Route will be a get accepting a number parameter, the controller accept the parameter 
  # in the controller create a method that accepts the parameter from the route 
  # Create a select statment that selects all of the mountains with number_of_trails greater than the parameter passed into them
  # Return an array of mountains that meets the requirements 
  # If no mountains meet the requirements return an error message 


end
