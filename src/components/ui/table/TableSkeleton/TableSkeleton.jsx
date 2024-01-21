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
import { TableRow, TableCell, Skeleton, Stack, } from '@mui/material';
// ----------------------------------------------------------------------
export default function TableSkeleton(_a) {
    var other = __rest(_a, []);
    return (<TableRow {...other}>
      <TableCell colSpan={12}>
        <Stack spacing={3} direction="row" alignItems="center">
          <Skeleton variant="rectangular" width={40} height={40} sx={{ borderRadius: 1, flexShrink: 0 }}/>
          <Skeleton variant="text" width="100%" height={20}/>
          <Skeleton variant="text" width={160} height={20}/>
          <Skeleton variant="text" width={160} height={20}/>
          <Skeleton variant="text" width={160} height={20}/>
          <Skeleton variant="text" width={160} height={20}/>
        </Stack>
      </TableCell>
    </TableRow>);
}
