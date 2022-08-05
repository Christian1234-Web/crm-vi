import React from "react";
import { useState } from "react";
import { ValidatorComponent } from "react-form-validator-core";

class TextValidator extends ValidatorComponent {
  render() {
    const {
      errorMessages,
      validators,
      requiredError,
      validatorListener,
      suffixText,
      ...rest
    } = this.props;
    const { active } = this.state;
    return (
      <React.Fragment>
        <div
          className={`form-group form-group-default d-flex justify-content-between ${
            this.props.require ? "required" : ""
          }`}
          aria-required="true"
        >
          <div>
            <label
              className={`${
                this.props.value !== "" || this.state.active ? "fade" : ""
              }`}
            >
              {this.props.label}
            </label>
            <input
              {...rest}
              ref={(r) => {
                this.input = r;
              }}
              onFocus={() => this.setState({ active: true })}
              onBlur={() => this.setState({ active: false })}
            />
          </div>
          {suffixText && (
            <div className="input-group-append-line">
              <span className="p-l-10 text-muted">@pages.com</span>
            </div>
          )}
        </div>
        {this.errorText()}
      </React.Fragment>
    );
  }

  errorText() {
    const { isValid } = this.state;

    if (isValid) {
      return null;
    }

    return <label className="error">{this.getErrorMessage()}</label>;
  }
}

export default TextValidator;
