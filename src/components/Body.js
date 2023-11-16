import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

export const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchData();
    console.log('UseEffect Called');
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

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks like you are offline!</h1>;
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container mx-auto">
      <div className="search mt-6" onClick={() => {}}>
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
      <div className="flex flex-wrap">
        {filteredRestaurant.map((res) => (
          <Link key={res.info.id} to={'/restaurants/' + res.info.id}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
