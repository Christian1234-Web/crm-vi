
const QuickViewActions = {
    TOGGLE_QUICKVIEW_OPEN: "TOGGLE_QUICKVIEW_OPEN",
    TOGGLE_QUICKVIEW_CLOSE: "TOGGLE_QUICKVIEW_CLOSE",
    TOGGLE_MOBILE_SIDEBAR_OPEN: "TOGGLE_MOBILE_SIDEBAR_OPEN",
    TOGGLE_MOBILE_SIDEBAR_CLOSE: "TOGGLE_MOBILE_SIDEBAR_CLOSE",
    toggleQuickViewOpen : () => ({
        type: 'TOGGLE_QUICKVIEW_OPEN'
    }),
    toggleQuickViewClose : () => ({
        type: 'TOGGLE_QUICKVIEW_CLOSE'
    }),
    toggleMobileSideBarOpen : () => ({
        type: 'TOGGLE_MOBILE_SIDEBAR_OPEN'
    }),
    toggleMobileSideBarClose : () => ({
        type: 'TOGGLE_MOBILE_SIDEBAR_CLOSE'
    })
}

export default QuickViewActions