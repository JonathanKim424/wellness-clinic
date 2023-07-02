import React from 'react';

const ImgWithFallback = ({
    src,
    fallback,
    alttag,
    type = 'image/webp'
}) => {
    return (
        <picture>
            <source srcSet={src} type={type} />
            <img src={fallback} alt={alttag} />
        </picture>
    )
};

export default ImgWithFallback