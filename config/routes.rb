Rails.application.routes.draw do
  post '/rate' => 'rater#create', :as => 'rate'
  devise_for :users, path_names: {sign_in: "login", sign_up: "register", sign_out: "logout"}, controllers: {
    confirmations: 'users/confirmations',
    passwords: 'users/passwords',
    registrations: 'users/registrations',
    sessions: 'users/sessions',
    unlocks: 'users/unlocks'
  }
  root :to => "candidates#index"
  resources :candidates do
    collection do
      get '/report' => 'candidates#report'
    end
  end

  get 'resume_parser' => "candidates#resume_parser"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
