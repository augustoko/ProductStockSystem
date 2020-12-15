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
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

import useStyles from './styles'

function ProductList() {
  const classes = useStyles();
  const [rows, setRows] = React.useState([]);
  const [responses, setResponses] = React.useState([]);

  const columns = [
    { id: 'id', label: 'id', minWidth: 170 },
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'price', label: 'price', minWidth: 100, format: (value) => value.toFixed(2), },
    { id: 'quantity', label: 'quantity', minWidth: 170 },
    { id: 'actions', label: 'actions', minWidth: 170, buttons: true },
  ];

  useEffect(() => {
    getProducts()
  },[])

  function getProducts() {
    axios.get('/api/products').then((data) => {
      console.log(data)
      if(data.status === 200){
        setRows(data.data)
      }
    });
  }

  function saveProduct(index) {
    let product = rows[index]
    if(product.new){
      createProduct(product, index)
    }
    updateProduct(product)
  }

  function createProduct(product, index) {
    
    axios.post('/api/products', product).then((data) => {
      console.log(data)
      if(data.status === 200){
        delete product.new
        rows[index].id = data.data.id
        setRows([...rows])

        responses.push(data)
        setResponses([...responses])
      }
    });
  }

  function updateProduct(product) {
    axios.put(`/api/products/${product.id}`, product).then((data) => {
      console.log(data)
      if(data.status === 200){
        responses.push(data)
        setResponses([...responses])
      }
    });
  }

  function deleteProduct(index) {
    let product = rows[index]
    axios.delete(`/api/products/${product.id}`).then((data) => {
      console.log(data)
      if(data.status === 200){
        rows.splice(index,1)
        responses.push(data)

        setRows([...rows])
        setResponses([...responses])
      }
    });
  }

  function bulkUpdate(all) {
    axios.post('/api/products/bulk', all).then((data) => {
      console.log(data)
      if(data.status === 200){
        responses.push(data)
        setResponses([...responses])
      }
    });

    getProducts()
  }
  
  function onChange(event, index, name) {
    rows[index]
    rows[index][name] = event.target.value
    setRows([...rows]);
  }

  function createData(id, name, price, quantity) {
    return { id, name, price, quantity, new: true };
  }

  function addProduct() {
    rows.push(createData('', '', 0, 0))
    setRows([...rows])
  }
  
  const RenderTable = () => {
    return rows.map((row, index) => {
      return (
        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
          {columns.map((column) => {
            const value = row[column.id];
            if(column.buttons){
              return(
                <TableCell key={column.id} align={column.align}>
                  <IconButton className={classes.buttonCreate} onClick={() => saveProduct(index)}>
                    <SaveIcon />
                  </IconButton>
                  <IconButton className={classes.buttonCreate} onClick={() => deleteProduct(index)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              )
            }else{
              return (
                <TableCell key={column.id} align={column.align}>
                  {
                    column.id === "id" ? value : (
                      <Input
                      className={classes.margin}
                      onChange={event => onChange(event, index, column.id)}
                      defaultValue={column.format && typeof value === 'number' ? column.format(value) : value}
                      inputProps={{ 'aria-label': 'naked' }}
                    />
                    )
                  }
                </TableCell>
              );
            }
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
      <div className={classes.buttonGroup}>
          <Button className={classes.buttonCreate} variant="contained" color="primary" component="span" onClick={addProduct}>
            Create
          </Button>
          <Button className={classes.buttonCreate} variant="contained" color="primary" component="span" onClick={() => bulkUpdate(rows)}>
            save all
          </Button>
      </div>

    </Paper>
  );
}

export default ProductList;



/* 

dividir duas tabelas em lugares diferentes

table products

verify price to have 0.00
save all/create show errors 
icones aparecem quando feita uma mudança

*/

