import * as React from 'react';
import { SvgColor } from 'components/ui/SvgColor';
import { ROUTES } from 'config/routes';
const icon = (name) => (<SvgColor src={`/src/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }}/>);
const ICONS = {
    code: icon('code'),
    info: icon('info'),
    settings: icon('settings'),
    list: icon('list'),
    blog: icon('ic_blog'),
    cart: icon('ic_cart'),
    chat: icon('ic_chat'),
    mail: icon('ic_mail'),
    user: icon('ic_user'),
    file: icon('ic_file'),
    lock: icon('ic_lock'),
    label: icon('ic_label'),
    blank: icon('ic_blank'),
    kanban: icon('ic_kanban'),
    folder: icon('ic_folder'),
    banking: icon('ic_banking'),
    booking: icon('ic_booking'),
    invoice: icon('ic_invoice'),
    calendar: icon('ic_calendar'),
    disabled: icon('ic_disabled'),
    external: icon('ic_external'),
    menuItem: icon('ic_menu_item'),
    ecommerce: icon('ic_ecommerce'),
    analytics: icon('ic_analytics'),
    dashboard: icon('ic_dashboard'),
};
const NAV_ITEMS = [
    {
        subheader: 'Menu',
        items: [
            {
                title: 'Загрузить код',
                path: ROUTES.main.async.createRoute(),
                icon: ICONS.code
            },
            {
                title: 'Инструкция',
                path: ROUTES.main.about.createRoute(),
                icon: ICONS.info
            },
            {
                title: 'Мои компляции',
                path: ROUTES.main.compiles.createRoute(),
                icon: ICONS.list
            },
        ],
    },
];
export default NAV_ITEMS;
