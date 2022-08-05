import React from 'react'

const Component = ({
        className, 
        children, 
        type, 
        value = 0, 
        dataThick = false, 
        dataColor = "",
        leftSideHalfCircleStyle = {},
        rightSideHalfCircleStyle = {},
        circleStyle = {},
        ...rest}) => {
    
    let extraClasses = '';

    if(dataThick) extraClasses += ` progress-circle-thick`;
    if(dataColor !== "") extraClasses += ` progress-circle-${dataColor}`; 

    return (
        <React.Fragment>
            <input className="progress-circle" data-pages-progress="circle" value={`${value}`} 
                type="hidden" data-thick={`${dataThick}`} data-color={`${dataColor}`} 
            />
            <div className={`progress-circle ${extraClasses}`}>
                <div className="pie" style={circleStyle}>
                    <div className="left-side half-circle" style={leftSideHalfCircleStyle}></div>
                    <div className="right-side half-circle" style={rightSideHalfCircleStyle}></div>
                </div>
                <div className="shadow"></div>
            </div>
        </React.Fragment>
    )
}

export default Component
