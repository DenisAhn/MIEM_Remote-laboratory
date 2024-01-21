import { TableRow, TableCell } from '@mui/material';
import * as React from 'react';
function TableEmptyRows({ emptyRows, height }) {
    if (!emptyRows) {
        return null;
    }
    return (<TableRow sx={Object.assign({}, (height && {
            height: height * emptyRows,
        }))}>
      <TableCell colSpan={9}/>
    </TableRow>);
}
export default React.memo(TableEmptyRows);
