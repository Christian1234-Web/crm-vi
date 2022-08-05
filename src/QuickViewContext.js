import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class QuickViewContextProvider extends Component {
  state = {
    viewCondition: "Close"
  };

  toggleViewCondition = () => {
    this.setState(prevState => {
      return {
        viewCondition: prevState.viewCondition === "Close" ? "Open" : "Close"
      };
    });
  };

  render() {
    return (
      <Provider
        value={{ viewCondition: this.state.viewCondition, toggleViewCondition: this.toggleViewCondition }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { QuickViewContextProvider, Consumer as QuickViewContextConsumer };
