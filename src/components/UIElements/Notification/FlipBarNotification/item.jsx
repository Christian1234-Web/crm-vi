import React from 'react'

const item = ({type, desc}) => {
    return (
        <div className="pgn push-on-sidebar-open pgn-flip">
            <div className={`alert alert-${type}`}>
                <button type="button" className="close" data-dismiss="alert">
                    <span aria-hidden="true">×</span>
                    <span className="sr-only">Close</span>
                </button>
                <span>{desc}</span>
            </div>
        </div>
    )
}

export default item
