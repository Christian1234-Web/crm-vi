import React , { useRef, useEffect, useState } from 'react'

const Component = ({className, children, ...rest}) => {

    let scrollElement = 'window';
    let scrollPos = 0;
    let coverPhotoSpeed = 0.3;

    const [windowSize, setWidth] = useState(window.innerWidth);
    const nativeElement = useRef(null);

    const updateWidth = () => {
        setWidth(window.innerWidth);
    };

    const registerPageContainerScroll = () => {
        // TODO : isHorizontalLayout
        let pageContainer = document.querySelector('.page-container');
        if (pageContainer) {
            scrollElement = pageContainer;
        }
    }

    const animate = () => {
        // Disable on mobile;
        if ((windowSize < 1025)) {
            return;
        }
        let rect = nativeElement.current.getBoundingClientRect();
        let opacityKeyFrame = (rect.width * 10) / 100;
        let direction = 'translateX';

        if (scrollElement === 'window') {
            scrollPos = window.pageYOffset || document.documentElement.scrollTop;
        } else {
            scrollPos = scrollElement.scrollTop;
        }

        direction = 'translateY';
        let styleString = direction + '(' + scrollPos * coverPhotoSpeed + 'px)';

        nativeElement.current.style.transform = styleString;
        // Legacy Browsers
        nativeElement.current.style.webkitTransform = styleString;
        nativeElement.current.style.mozTransform = styleString;
        nativeElement.current.style.msTransform = styleString;

        if (scrollPos > opacityKeyFrame) {
            nativeElement.current.style.opacity = 1 - scrollPos / 1200;
        } else {
            nativeElement.current.style.opacity = 1;
        }
    }

    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        window.addEventListener("scroll", animate);
        registerPageContainerScroll()
        return (() => {
            window.removeEventListener("resize", updateWidth)
            window.removeEventListener("scroll", animate)
        });
    });

    return (
        <div className={`${className}`} ref={nativeElement} {...rest}>
            {children}
        </div>
    )
}

export default Component
