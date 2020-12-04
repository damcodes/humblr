Rails.application.routes.draw do
  resources :users, except: [:edit, :new]
  resources :posts, only: [:show, :create, :update, :destroy]
  resources :follows, only: [:create, :destroy]
  resources :likes, only: [:create, :destroy]
  resources :comments, only: [:create, :destroy]
  resources :sessions, only: [:create, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
