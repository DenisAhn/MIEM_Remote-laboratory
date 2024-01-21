import * as React from 'react';
import { Box } from "@mui/material";
import Active from './Active';
import NotActive from './NotActive';
const Switch = ({ isActive, sx }) => {
    return (<Box sx={Object.assign({}, sx)}>
            <div>
                {isActive ? Active : NotActive}
            </div>
        </Box>);
};
export default Switch;
