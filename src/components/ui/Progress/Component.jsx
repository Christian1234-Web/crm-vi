import React from 'react';
import pages from '../pages/js/pages';

class Component extends React.Component {
  componentDidMount() {
    new pages.Progress(this.$el)
  }

  componentWillUnmount() {
    // TODO implement destroy event for progress plugin
  }


  render() {
    return (
      <div>
        <input ref={el => this.el = el} className="progress-circle" value={this.props.value} type="hidden"/>
      </div>
    );
  }
}

export default Component;