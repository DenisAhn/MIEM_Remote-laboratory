import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { useActiveLink } from 'hooks/useActiveLink';
import { NavItem } from './Item';
const NavList = ({ data, depth }) => {
    const { pathname } = useLocation();
    const { active, isExternalLink } = useActiveLink(data.path);
    const [open, setOpen] = React.useState(active);
    React.useEffect(() => {
        if (!active) {
            handleClose();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);
    const handleToggle = () => {
        setOpen(!open);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (<NavItem item={data} depth={depth} open={open} active={active} isExternalLink={isExternalLink} onClick={handleToggle}/>);
};
export default NavList;
