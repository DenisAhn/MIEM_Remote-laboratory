var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { Box } from '@mui/material';
import * as React from 'react';
import { forwardRef } from 'react';
import { LazyLoadImage, } from 'react-lazy-load-image-component';
import { getRatio } from './utils';
const Image = forwardRef((_a, ref) => {
    var { ratio, disabledEffect = false, effect = 'blur', sx } = _a, other = __rest(_a, ["ratio", "disabledEffect", "effect", "sx"]);
    const content = (<Box component={LazyLoadImage} wrapperClassName="wrapper" effect={disabledEffect ? undefined : effect} placeholderSrc={disabledEffect ? '/assets/transparent.png' : '/assets/placeholder.svg'} sx={{ width: 1, height: 1, objectFit: 'cover' }} {...other}/>);
    if (ratio) {
        return (<Box ref={ref} component="span" sx={Object.assign({ width: 1, lineHeight: 1, display: 'block', overflow: 'hidden', position: 'relative', pt: getRatio(ratio), '& .wrapper': {
                    top: 0,
                    left: 0,
                    width: 1,
                    height: 1,
                    position: 'absolute',
                    backgroundSize: 'cover !important',
                } }, sx)}>
          {content}
        </Box>);
    }
    return (<Box ref={ref} component="span" sx={Object.assign({ lineHeight: 1, display: 'block', overflow: 'hidden', position: 'relative', '& .wrapper': {
                width: 1,
                height: 1,
                backgroundSize: 'cover !important',
            } }, sx)}>
        {content}
      </Box>);
});
export default Image;
