import React from 'react'

const GalleryItem = ({children, className, style, ...props}) => {
    return (
        <div className={`gallery-item ${className}`} data-width="1" data-height="1" style={style} {...props}>
            {children}
        </div>
    )
}

export default GalleryItem
