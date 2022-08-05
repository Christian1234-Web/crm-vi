import React , { useState } from 'react'

import Button from '../../Button';
import RadioButton from '../../Button/RadioButton';
import Label from '../../Label';

const ToggleVariations = () => {

    const [toggleDesignerBtn, setToggleDesignerBtn] = useState(false);
    const [toggleDeveloperBtn, setToggleDeveloperBtn] = useState(false);
    const [toggleLeadershipBtn, setToggleLeadershipBtn] = useState(false);

    const [toggleGenderGroupBtn, setToggleGenderGroupBtn] = useState(false);

    return (
        <div className="card card-default">
            <div className="card-header ">
                <div className="card-title">Toggle Variations</div>
            </div>
            <div className="card-body">
                <p>Button groups can act as a radio or a switch or even a single toggle. Below are some examples click to see
                    what happens
                </p>
                <div className="m-t-15">
                    <Button type="complete">
                        Single toggle
                    </Button>
                    <br/>
                    <br/>
                    <div className="btn-group btn-group-toggle">
                        <Label type="default" className={`${toggleDesignerBtn ? 'active' : ''}`} 
                            onClick={() => setToggleDesignerBtn(prevState => !prevState)}>
                                Designer
                        </Label>
                        <Label type="default" className={`${toggleDeveloperBtn ? 'active' : ''}`} 
                            onClick={() => setToggleDeveloperBtn(prevState => !prevState)}>
                                Developer
                        </Label>
                        <Label type="default" className={`${toggleLeadershipBtn ? 'active' : ''}`} 
                            onClick={() => setToggleLeadershipBtn(prevState => !prevState)}>
                                Leadership
                        </Label>
                    </div>

                    <br/>
                    <br/>
                    <form className="form-inline">
                        <div className="btn-group btn-group-toggle" formcontrolname="radio">
                            <RadioButton btnradio="A" type="default" className={`${toggleGenderGroupBtn ? 'active' : ''}`} 
                                onClick={() => setToggleGenderGroupBtn(prevState => !prevState)}>
                                    Male
                            </RadioButton>
                            <RadioButton btnradio="B" type="default" className={`${toggleGenderGroupBtn ? '' : 'active'}`} 
                                onClick={() => setToggleGenderGroupBtn(prevState => !prevState)}>
                                    Female
                            </RadioButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ToggleVariations
