import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

const Header = () => {
  return (
    <div className="header">
      <img
        src="https://www.creativefabrica.com/wp-content/uploads/2020/02/11/Food-Logo-Graphics-1-70.jpg"
        className="logo"
        alt=""
      />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div>
      <div className="search">Search with Button</div>
      <div className="restaurant-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img src="" alt="" />
      <h3>Meghana Foods</h3>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
