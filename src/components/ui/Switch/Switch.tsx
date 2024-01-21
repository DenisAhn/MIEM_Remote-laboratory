import * as React from 'react';
import {Box} from "@mui/material";
import  Active from './Active';
import  NotActive from './NotActive';

type SvgIconProps  = {
    isActive: boolean;
    sx: object;
}
const Switch: React.FC<SvgIconProps> = ({ isActive, sx}) => {
    return (
        <Box
        sx={{...sx}}
        >
            <div>
                {isActive ? Active : NotActive}
            </div>
        </Box>
    );
};

export default Switch;
