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
import { useTheme } from '@mui/material/styles';
import { forwardRef } from 'react';
import { StyledLabel } from './styles';
const Label = forwardRef((_a, ref) => {
    var { children, color = 'default', variant = 'soft', startIcon, endIcon, sx } = _a, other = __rest(_a, ["children", "color", "variant", "startIcon", "endIcon", "sx"]);
    const theme = useTheme();
    const iconStyle = {
        width: 16,
        height: 16,
        '& svg, img': { width: 1, height: 1, objectFit: 'cover' },
    };
    return (<StyledLabel ref={ref} component="span" 
    /* @ts-ignore*/
    ownerState={{ color, variant }} sx={Object.assign(Object.assign(Object.assign({}, (startIcon && { pl: 0.75 })), (endIcon && { pr: 0.75 })), sx)} theme={theme} {...other}>
        {startIcon && <Box sx={Object.assign({ mr: 0.75 }, iconStyle)}> {startIcon} </Box>}

        {children}

        {endIcon && <Box sx={Object.assign({ ml: 0.75 }, iconStyle)}> {endIcon} </Box>}
      </StyledLabel>);
});
export default Label;
