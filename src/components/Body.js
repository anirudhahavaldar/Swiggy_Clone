import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

export const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    let data = fetchData();
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
  };

  if (listOfRestaurants.length === 0) {
    return (
      <>
        <Shimmer />;
        <Shimmer />;
        <Shimmer />;
        <Shimmer />;
        <Shimmer />;
        <Shimmer />;
        <Shimmer />;
        <Shimmer />;
        <Shimmer />;
        <Shimmer />;
      </>
    );
  }

  return (
    <div>
      <div className="search">
        <div className="filter">
          <button
            id="top-restaurants"
            onClick={() => {
              filterRestaurants = listOfRestaurants.filter(
                (res) => res.info.avgRating >= 4
              );
              setListOfRestaurants(filterRestaurants);
            }}
          >
            Top Restaurants
          </button>
        </div>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
