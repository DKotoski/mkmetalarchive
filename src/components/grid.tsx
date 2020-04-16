import React from 'react';
import { TableContainer, Table, TableHead, TableCell, TableRow, TableBody } from '@material-ui/core';

export interface TableProps<T> {
    data: T[];
    headers: TableHeader[];
    rowRenderer: (row: T) => JSX.Element;
}

export interface TableHeader {
    title: string;
}

const TableGrid = function <T>(props: TableProps<T>) {
    return (<TableContainer>
        <Table size="medium">
            <TableHead>
                <TableRow>
                    {
                        props.headers.map(x => <TableCell key={x.title}>{x.title}</TableCell>)
                    }
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    
                    props.data.map(x => props.rowRenderer(x))
                    
                }
            </TableBody>
        </Table>
    </TableContainer>);
}

export { TableGrid };