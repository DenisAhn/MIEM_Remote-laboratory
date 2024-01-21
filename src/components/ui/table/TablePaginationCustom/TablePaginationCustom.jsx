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
// @mui
import { Box, Switch, TablePagination, FormControlLabel, } from '@mui/material';
export default function TablePaginationCustom(_a) {
    var { dense, onChangeDense, rowsPerPageOptions = [5, 10, 25], sx } = _a, other = __rest(_a, ["dense", "onChangeDense", "rowsPerPageOptions", "sx"]);
    return (<Box sx={Object.assign({ position: 'relative' }, sx)}>
      <TablePagination rowsPerPageOptions={rowsPerPageOptions} component="div" {...other}/>

      {onChangeDense && (<FormControlLabel label="Dense" control={<Switch checked={dense} onChange={onChangeDense}/>} sx={{
                pl: 2,
                py: 1.5,
                top: 0,
                position: {
                    sm: 'absolute',
                },
            }}/>)}
    </Box>);
}
