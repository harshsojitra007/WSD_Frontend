import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Input
} from '@mui/material';

import "../Styles/InsertProduct.css";

function InsertProductPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, like send it to an API
    console.log({ name, description, price, stock, category });
  };

  return (
    <div className={"root"}>
      <Container className='form-outer' maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Insert Product
        </Typography>
        <form onSubmit={handleSubmit} className={"form"}>
          <TextField
            label="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={"textField"}
            fullWidth
            required
          />
          <TextField
            label="Description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            className={"textField"}
            fullWidth
            required
          />
          <TextField
            label="Price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            className={"textField"}
            fullWidth
            required
            type="number"
          />
          <TextField
            label="Stock"
            value={stock}
            onChange={(event) => setStock(event.target.value)}
            className={"textField"}
            fullWidth
            required
            type="number"
          />
          <FormControl className={"formControl"} fullWidth required>
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              id="category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <MenuItem value="electronics">Electronics</MenuItem>
              <MenuItem value="clothing">Clothing</MenuItem>
            </Select>
          </FormControl>
          <FormControl className='formControl'>
            <p className='custom-label' htmlFor='product-image'>Upload Image for the Product</p>
            <Input id='product-image' type='file' disableUnderline />
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={"button"}
            fullWidth
          >
            Add Product
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default InsertProductPage;