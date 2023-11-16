import { useEffect, useState } from 'react';

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState(null);

  useEffect(() => {
    fetchData();
    console.log('UseEffect Called');
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );

    const jsonData = await data.json();
    console.log(jsonData);

    setRestaurants(
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    console.log(
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  console.log(restaurants);
  return restaurants;
};

export default useRestaurants;
