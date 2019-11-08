require 'sinatra/base'

class AirportController < Sinatra::Base

  set :static, true

  get '/' do
    File.read('./views/index.html')
  end

end
