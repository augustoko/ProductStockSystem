import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

import useStyles from './styles'

function ProductList(tableProps) {
  const classes = useStyles();
  const [rows, setRows] = React.useState([]);

  const columns = [
    { id: 'id', label: 'id', minWidth: 170 },
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'quantity', label: 'quantity', minWidth: 170 },
    { id: 'created_at', label: 'update date', minWidth: 170},
  ];

  useEffect(() => {
    getProducts()
  },[])

  function getProducts() {
    axios.get('api/products/histories').then((data) => {
        console.log(data)
        setRows(data.data)
    });
  }
  
  const RenderTable = () => {
    return rows.map((row, index) => {
      return (
        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
          {columns.map((column) => {
            const value = row[column.id];
            return (
              <TableCell key={column.id} align={column.align}>
                {column.format && typeof value === 'number' ? column.format(value) : value}
              </TableCell>
            );
          })}
        </TableRow>
      );
    })
  }

  return (
    <Paper className={classes.tableContainer}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {RenderTable()}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default ProductList;




