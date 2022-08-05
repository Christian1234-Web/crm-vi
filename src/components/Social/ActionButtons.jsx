import React from 'react'

const ActionButtons = ({isExpand, expandIcon, isFavorite, favoriteIcon}) => {
    return (
        <ul className="buttons ">
            {isExpand ? 
                <li>
                    <a href="javascript:void(0);" className="d-flex"><i className="pg-icon">{expandIcon}</i></a>
                </li>
                : null
            }
            {isFavorite ? 
                <li>
                    <a href="javascript:void(0);" className="d-flex"><i className="pg-icon">{favoriteIcon}</i></a>
                </li>
                : null
            }
        </ul>
    )
}

export default ActionButtons
