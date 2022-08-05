import React from 'react';
import { useDispatch } from 'react-redux';
import QuickViewAction from '../../redux/actions/QuickViewAction';

const NavClose = () => {
    const dispatch = useDispatch();
    const { toggleQuickViewClose } = QuickViewAction;
    return (
        <a 
            onClick={() => dispatch(toggleQuickViewClose())}
            className="btn-icon-link invert quickview-toggle" 
            data-toggle-element="#quickview" 
            data-toggle="quickview">
            <i className="pg-icon">close</i>
        </a>
    )
}

export default NavClose
