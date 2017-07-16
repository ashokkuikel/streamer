
require 'sinatra'

get '/' do
  erb :index, :format => :html5
end

get '/view' do
  @channel_name = params[:channel].upcase
  erb :view, :format => :html5
end 
