import React from "react";
import { ValidatorComponent } from "react-form-validator-core";

class WithoutMsgValidation extends ValidatorComponent {
  render() {
    const {
      errorMessages,
      validators,
      requiredError,
      validatorListener,
      ...rest
    } = this.props;

    const { active } = this.state;

    return (
      <React.Fragment>
        <div
          className={`form-group form-group-default 
                    ${this.props.require ? "required" : ""} ${
            this.state.isValid ? "" : "has-error"
          }`}
          aria-required="true"
        >
          <label
            className={`${
              this.props.value !== "" || this.state.active ? "fade" : ""
            }`}
          >
            {this.props.label}
          </label>
          <div className="controls">
            <input
              {...rest}
              ref={(r) => {
                this.input = r;
              }}
              onFocus={() => this.setState({ active: true })}
              onBlur={() => this.setState({ active: false })}
            />
          </div>
          {this.errorText()}
        </div>
      </React.Fragment>
    );
  }
  errorText() {
    const { isValid } = this.state;

    if (isValid) {
      return null;
    }

    return (
      <div className="popover validation-popover">
        <div className="arrow"></div>
        <div className="popover-body">{this.getErrorMessage()}</div>
      </div>
    );
  }
}

export default WithoutMsgValidation;
