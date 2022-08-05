import React from 'react';
import { ValidatorComponent } from 'react-form-validator-core'
 
class SelectValidation extends ValidatorComponent {
 
    render() {
        const { errorMessages, validators, requiredError, validatorListener, ...rest } = this.props;
        return (
            <React.Fragment>
                <div className={`form-group form-group-default 
                    ${this.props.require ? 'required' : ''} ${this.state.isValid ? '' : 'has-error'}`} 
                    aria-required="true"
                >
                    <label>{this.props.label}</label>
                    <select
                        {...rest}
                        ref={(r) => { this.input = r; }}
                    >
                        {rest.options}
                    </select>
                </div>
            </React.Fragment>
        );
    }
}
 
export default SelectValidation;