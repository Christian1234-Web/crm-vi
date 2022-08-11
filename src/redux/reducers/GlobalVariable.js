import actions from '../actions/GlobalVariableAction';

const initialState = {
    totalSms: ''
}
export default function QuickView(state = initialState, { type, payload }) {
    switch (type) {
        case actions.TOTAL_SMS:
            return { ...state, totalSms: payload }
        default:
            return { ...state }
    }
}