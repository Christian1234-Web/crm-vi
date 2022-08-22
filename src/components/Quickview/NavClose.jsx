import React from 'react';
import { useDispatch } from 'react-redux';
import QuickViewAction from '../../redux/actions/QuickViewAction';

const NavClose = () => {
    const dispatch = useDispatch();
    const { toggleQuickViewClose } = QuickViewAction;
    return (
        <a 
            onClick={() => dispatch(toggleQuickViewClose())}
            className="btn-icon-link invert quickview-toggle " 
            data-toggle-element="#quickview" 
            data-toggle="quickview"
            >
            <i className="pg-icon text-success mb-1" 
            style={{border:'1px solid #005bab', borderRadius:'50%'}}
            >close</i>
        </a>
    )
}

export default NavClose
