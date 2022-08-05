import actions from '../actions';
import { Map } from 'immutable';

const initialState = new Map({
    openQuickView: false,
    openMobileSideBar: false
});

export default function QuickView(state = initialState, action) {
    switch(action.type) {
        case actions.TOGGLE_QUICKVIEW_CLOSE:
            return {...state, openQuickView: false}
        case actions.TOGGLE_QUICKVIEW_OPEN:
            return {...state, openQuickView: true}
        case actions.TOGGLE_MOBILE_SIDEBAR_CLOSE:
            return {...state, openMobileSideBar: false}
        case actions.TOGGLE_MOBILE_SIDEBAR_OPEN:
            return {...state, openMobileSideBar: true}
        default:
            return {...state}
    }
}