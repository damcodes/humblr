Rails.application.routes.draw do
  resources :posts, only: [:index]
  #resources :follows
  resources :users, only: [:index, :show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
