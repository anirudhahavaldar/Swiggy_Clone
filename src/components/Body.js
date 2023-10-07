import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

export const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );

    const jsonData = await data.json();

    setListOfRestaurants(
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="search" onClick={() => {}}>
        <input
          type="text"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            let searchedRestaurants = listOfRestaurants.filter((res) => {
              return res.info.name.toLowerCase().includes(searchText);
            });

            setFilteredRestaurant(searchedRestaurants);
          }}
        >
          Search
        </button>
      </div>
      <div className="filter">
        <button
          id="top-restaurants"
          onClick={() => {
            filterRes = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.2
            );
            setListOfRestaurants(filterRes);
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {filteredRestaurant.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
