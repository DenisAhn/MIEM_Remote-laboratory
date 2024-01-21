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
import { Icon } from '@iconify/react';
import { Box } from '@mui/material';
import * as React from 'react';
const Iconify = React.forwardRef((_a, ref) => {
    var { icon, width = 20, sx } = _a, other = __rest(_a, ["icon", "width", "sx"]);
    return (<Box ref={ref} component={Icon} icon={icon} sx={Object.assign({ width, height: width }, sx)} {...other}/>);
});
export default React.memo(Iconify);
