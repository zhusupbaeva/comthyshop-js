import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

// dev-vbobagow.us.auth0.com
// ahj5ZGOqYJOza2JQRSUS3wFOx0CKIFMG

ReactDOM.render(
  <Auth0Provider
    domain='dev-p7crg6dv20ilz0uz.us.auth0.com'
    clientId='6lJsKFTQIR0uQgEjOnxUUILk1yrrGqts'
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById('root')
);