class TaskBroadcastJob < ApplicationJob
  queue_as :default

  def perform(task)
    ActionCable.server.broadcast 'task_channel', task: task.to_json
  end
end
