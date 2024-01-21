import { ListItemButton, ListItemIcon } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { ICON, NAV } from 'styles/constants';
export const StyledItem = styled(ListItemButton, {
    shouldForwardProp: (prop) => prop !== 'active' && prop !== 'caption',
})(({ active, disabled, depth, caption, theme }) => {
    const isLight = theme.palette.mode === 'light';
    const subItem = depth !== 1;
    const activeStyle = Object.assign({ color: theme.palette.primary.main, backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity) }, (!isLight && {
        color: theme.palette.primary.light,
    }));
    const activeSubStyle = {
        color: theme.palette.text.primary,
        backgroundColor: 'transparent',
    };
    return Object.assign(Object.assign(Object.assign(Object.assign({ position: 'relative', textTransform: 'capitalize', paddingLeft: theme.spacing(2), paddingRight: theme.spacing(1.5), marginBottom: theme.spacing(0.5), color: theme.palette.text.secondary, borderRadius: theme.shape.borderRadius, height: NAV.H_DASHBOARD_ITEM }, (subItem && Object.assign(Object.assign({ height: NAV.H_DASHBOARD_ITEM_SUB }, (depth > 2 && {
        paddingLeft: theme.spacing(depth),
    })), (caption && {
        height: NAV.H_DASHBOARD_ITEM,
    })))), (active && Object.assign(Object.assign({}, activeStyle), { '&:hover': Object.assign({}, activeStyle) }))), (subItem &&
        active && Object.assign(Object.assign({}, activeSubStyle), { '&:hover': Object.assign({}, activeSubStyle) }))), (disabled && {
        '&.Mui-disabled': {
            opacity: 0.64,
        },
    }));
});
// ----------------------------------------------------------------------
export const StyledIcon = styled(ListItemIcon)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: ICON.NAV_ITEM,
    height: ICON.NAV_ITEM,
});
export const StyledDotIcon = styled('span', {
    shouldForwardProp: (prop) => prop !== 'active',
})(({ active, theme }) => (Object.assign({ width: 4, height: 4, borderRadius: '50%', backgroundColor: theme.palette.text.disabled, transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shorter,
    }) }, (active && {
    transform: 'scale(2)',
    backgroundColor: theme.palette.primary.main,
}))));
