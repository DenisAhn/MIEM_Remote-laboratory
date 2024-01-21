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
import { NAV } from 'styles/constants';
const Main = (_a) => {
    var { children, sx } = _a, props = __rest(_a, ["children", "sx"]);
    return (<Box component="main" sx={Object.assign(Object.assign({ flexGrow: 1 }, {
            px: 2,
            py: 2 /* `${HEADER.H_DASHBOARD_DESKTOP + SPACING}px` */,
            width: `calc(100% - ${NAV.W_DASHBOARD}px)`,
        }), sx)} {...props}>
      {children}
    </Box>);
};
export default Main;
