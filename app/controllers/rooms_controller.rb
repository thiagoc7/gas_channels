class RoomsController < ApplicationController
  def show
    @tasks = Task.all
  end
end
