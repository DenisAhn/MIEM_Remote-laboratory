import { alpha } from '@mui/material/styles';
export function bgBlur(props) {
    const color = (props === null || props === void 0 ? void 0 : props.color) || '#000000';
    const blur = (props === null || props === void 0 ? void 0 : props.blur) || 6;
    const opacity = (props === null || props === void 0 ? void 0 : props.opacity) || 0.8;
    const imgUrl = props === null || props === void 0 ? void 0 : props.imgUrl;
    if (imgUrl) {
        return {
            position: 'relative',
            backgroundImage: `url(${imgUrl})`,
            '&:before': {
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 9,
                content: '""',
                width: '100%',
                height: '100%',
                backdropFilter: `blur(${blur}px)`,
                WebkitBackdropFilter: `blur(${blur}px)`,
                backgroundColor: alpha(color, opacity),
            },
        };
    }
    return {
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        backgroundColor: alpha(color, opacity),
    };
}
export function bgGradient(props) {
    const direction = (props === null || props === void 0 ? void 0 : props.direction) || 'to bottom';
    const startColor = props === null || props === void 0 ? void 0 : props.startColor;
    const endColor = props === null || props === void 0 ? void 0 : props.endColor;
    const imgUrl = props === null || props === void 0 ? void 0 : props.imgUrl;
    const color = props === null || props === void 0 ? void 0 : props.color;
    if (imgUrl) {
        return {
            background: `linear-gradient(${direction}, ${startColor || color}, ${endColor || color}), url(${imgUrl})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
        };
    }
    return {
        background: `linear-gradient(${direction}, ${startColor}, ${endColor})`,
    };
}
export function textGradient(value) {
    return {
        background: `-webkit-linear-gradient(${value})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    };
}
export function filterStyles(value) {
    return {
        filter: value,
        WebkitFilter: value,
        MozFilter: value,
    };
}
export const hideScrollbarY = {
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
        display: 'none',
    },
};
export const hideScrollbarX = {
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    overflowX: 'scroll',
    '&::-webkit-scrollbar': {
        display: 'none',
    },
};
