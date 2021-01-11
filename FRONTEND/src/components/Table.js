import React, { useMemo } from 'react';
import { useTable, useFilters, useGlobalFilter, usePagination } from 'react-table';
import { COLUMNS, GlobalFilter, ColumnFilter, HideColumns } from './tableUtils';
import { TablePlus, TableContainer, Pager } from '../styles';

const Table = ({fetchedData}) => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => fetchedData.records.profiles, [])

    const defaultColumn =  useMemo(() => {
        return {
            Filter: ColumnFilter
        }
    }, []) 

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        prepareRow,
        state,
        setGlobalFilter,
        allColumns,
        getToggleHideAllColumnsProps
    } = useTable({
        columns,
        data,
        defaultColumn,
        initialState: {pageSize: 20}
    },
    useFilters,
    useGlobalFilter,
    usePagination);

    const { globalFilter, pageIndex} = state;

    return (
        <>
        <TablePlus>
        <HideColumns getToggleHideAllColumnsProps={getToggleHideAllColumnsProps} allColumns={allColumns}/>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
        </TablePlus>
        <TableContainer {...getTableProps()}>
            <thead>
                {
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                                </th>
                            ))}
                        </tr>            
                    ))
                }
            </thead>            
            <tbody {...getTableBodyProps()}>
                {
                    page.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })
                }            
            </tbody>            
        </TableContainer>
        <Pager>
            <button onClick={ () => gotoPage(0)} disabled={!canPreviousPage}>{"<<"}</button>
            <button onClick={ () => previousPage()} disabled={!canPreviousPage}>Previous</button>
            <span>
                page{' '}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>
            </span>
            {/* <span>
                | Go to page:{' '}
                <input 
                    type='number'
                    defaultValue={pageIndex + 1}
                    onChange={e => {
                        const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                        gotoPage(pageNumber)
                    }}
                />
            </span> */}
            <button onClick={ () => nextPage()} disabled={!canNextPage}>Next</button>
            <button onClick={ () => gotoPage(pageCount - 1)} disabled={!canNextPage}>{">>"}</button>
        </Pager>
        </>
    )
}

export default Table