import React, { Component, PropTypes } from 'react';

import Form from './Form';
import Filter from './Filter';
import Tasks from './Tasks';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialDate: '2016-01-01',
      finalDate: '2016-01-31',
      tasks: this.props.tasks
    }
  }

  componentDidMount() {
    var component = this;
    App.task = App.cable.subscriptions.create("TaskChannel", {
          connected: function() {},
          disconnected: function() {},
          received: function(data) {
            component.setState({tasks: [JSON.parse(data.task), ...component.state.tasks]})
          },
          new_task: function(task) {
            return this.perform('new_task', task);
          }
        });
  }

  onCreate(task) {
    App.task.new_task(task);
  }

  onFilter(dates) {
    console.log(dates)
  }

  render() {
    return (
        <div className="container">

          <Form onCreate={this.onCreate.bind(this)}/>

          <Filter
              initialDate={this.state.initialDate}
              finalDate={this.state.finalDate}
              onFilter={this.onFilter.bind(this)}
          />

          <Tasks tasks={this.state.tasks}/>

        </div>
    )
  }
}
