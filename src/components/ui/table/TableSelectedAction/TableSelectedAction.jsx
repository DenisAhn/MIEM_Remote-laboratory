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
import { Checkbox, Typography, Stack } from '@mui/material';
export default function TableSelectedAction(_a) {
    var { dense, action, rowCount, numSelected, onSelectAllRows, sx } = _a, other = __rest(_a, ["dense", "action", "rowCount", "numSelected", "onSelectAllRows", "sx"]);
    if (!numSelected) {
        return null;
    }
    return (<Stack direction="row" alignItems="center" sx={Object.assign(Object.assign({ pl: 1, pr: 2, top: 0, left: 0, width: 1, zIndex: 9, height: 58, position: 'absolute', bgcolor: 'primary.lighter' }, (dense && {
            height: 38,
        })), sx)} {...other}>
      <Checkbox indeterminate={numSelected > 0 && numSelected < rowCount} checked={rowCount > 0 && numSelected === rowCount} onChange={(event) => onSelectAllRows(event.target.checked)}/>

      <Typography variant="subtitle1" sx={Object.assign({ ml: 2, flexGrow: 1, color: 'primary.main' }, (dense && {
            ml: 3,
        }))}>
        {numSelected} selected
      </Typography>

      {action}
    </Stack>);
}
