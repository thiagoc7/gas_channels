# Be sure to restart your server when you modify this file. Action Cable runs in an EventMachine loop that does not support auto reloading.
class TaskChannel < ApplicationCable::Channel
  def subscribed
    stream_from "task_channel"
  end

  def unsubscribed
    stop_all_streams
  end

  def new_task(task)
    Task.create! date: task['date'], description: task['description']
  end
end
