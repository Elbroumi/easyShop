// components/ProductCard.js
import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: '10px',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const ProductCard = ({ product }) => {
  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="200"
        image={product?.image || 'https://via.placeholder.com/200'}
        alt={product?.name || 'Product image'}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product?.name || 'Product Name'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product?.description || 'Product description goes here'}
        </Typography>
        <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
          ${product?.price || '0.00'}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Button
          variant="contained"
          color="primary"
          startIcon={<ShoppingCartIcon />}
          sx={{ ml: 'auto' }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </StyledCard>
  );
};

export default ProductCard;