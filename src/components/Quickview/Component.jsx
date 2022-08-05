import React from 'react';
import { TabContent, TabPane } from 'reactstrap';
import { connect } from 'react-redux'

import Alerts from './Alert/Component';
import Chat from './Chat/Component';
import Note from './Note/Component';
import NavClose from './NavClose';
import './style.scss';


class Component extends React.Component {

  constructor(props) {
    super(props);

    this.navTabChangeHandler = this.navTabChangeHandler.bind(this);
  }

  state = {
    activeTab: '3'
  }

  navTabChangeHandler = (index) => { }

  render() {

    const toggle = tab => {
      if (this.state.activeTab !== tab) {
        this.setState({ activeTab: tab })
      }
    }

    return (
      <div id="quickview" className={`quickview-wrapper chat ${this.props.openState ? 'open' : ''}`} data-pages="quickview">
        <ul className="nav nav-tabs" role="tablist">
          <li className="">
            <a href="javascript:void(0);" data-target="#quickview-notes" data-toggle="tab" role="tab"
              className={`${this.state.activeTab === '1' ? 'active' : ''}`}
              aria-selected={`${this.state.activeTab === '1' ? 'true' : 'false'}`}
              onClick={(e) => {
                e.preventDefault()
                toggle('1')
              }}
            >Notes</a>
          </li>
          <li>
            <a href="javascript:void(0);" data-target="#quickview-alerts" data-toggle="tab" role="tab"
              className={`${this.state.activeTab === '2' ? 'active' : ''}`}
              aria-selected={`${this.state.activeTab === '2' ? 'true' : 'false'}`}
              onClick={(e) => {
                e.preventDefault()
                toggle('2')
              }}
            >Alerts</a>
          </li>
          <li className="">
            <a href="javascript:void(0);" data-target="#quickview-chats" data-toggle="tab" role="tab"
              className={`${this.state.activeTab === '3' ? 'active' : ''}`}
              aria-selected={`${this.state.activeTab === '3' ? 'true' : 'false'}`}
              onClick={(e) => {
                e.preventDefault()
                toggle('3')
              }}
            >Chat</a>
          </li>
        </ul>
        {/* START Tab close button component */}
        <NavClose />
        {/* END Tab close button component */}
        <TabContent activeTab={this.state.activeTab} >
          <TabPane className="no-padding" tabId="1">
            <Note />
          </TabPane>
          <TabPane className="no-padding" tabId="2">
            <Alerts />
          </TabPane>
          <TabPane className="no-padding" tabId="3">
            <Chat />
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    openState: state.QuickView.openQuickView
  }
}
const mapDispatchToProps = dispatch12 => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Component);


