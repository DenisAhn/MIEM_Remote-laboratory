import * as React from 'react';
export function useTable(props) {
    const [dense, setDense] = React.useState(!!(props === null || props === void 0 ? void 0 : props.defaultDense));
    const [orderBy, setOrderBy] = React.useState((props === null || props === void 0 ? void 0 : props.defaultOrderBy) || 'name');
    const [order, setOrder] = React.useState((props === null || props === void 0 ? void 0 : props.defaultOrder) || 'asc');
    const [page, setPage] = React.useState((props === null || props === void 0 ? void 0 : props.defaultCurrentPage) || 0);
    const [rowsPerPage, setRowsPerPage] = React.useState((props === null || props === void 0 ? void 0 : props.defaultRowsPerPage) || 5);
    const [selected, setSelected] = React.useState((props === null || props === void 0 ? void 0 : props.defaultSelected) || []);
    const onSort = React.useCallback((id) => {
        const isAsc = orderBy === id && order === 'asc';
        if (id !== '') {
            setOrder(isAsc ? 'desc' : 'asc');
            setOrderBy(id);
        }
    }, [order, orderBy]);
    const onSelectRow = React.useCallback((id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];
        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        }
        else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        }
        else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        }
        else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }
        setSelected(newSelected);
    }, [selected]);
    const onSelectAllRows = React.useCallback((checked, newSelecteds) => {
        if (checked) {
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    }, []);
    const onChangePage = React.useCallback((event, newPage) => {
        setPage(newPage);
    }, []);
    const onChangeRowsPerPage = React.useCallback((event) => {
        setPage(0);
        setRowsPerPage(parseInt(event.target.value, 10));
    }, []);
    const onChangeDense = React.useCallback((event) => {
        setDense(event.target.checked);
    }, []);
    return {
        dense,
        order,
        page,
        orderBy,
        rowsPerPage,
        selected,
        onSelectRow,
        onSelectAllRows,
        onSort,
        onChangePage,
        onChangeDense,
        onChangeRowsPerPage,
        setPage,
        setDense,
        setOrder,
        setOrderBy,
        setSelected,
        setRowsPerPage,
    };
}
