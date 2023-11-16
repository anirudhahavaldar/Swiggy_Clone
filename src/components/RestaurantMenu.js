import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { MENU_API } from '../utils/constants';
import { useParams } from 'react-router-dom';
import useRestaurantmenu from '../utils/useRestaurantmenu';

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resMenu = useRestaurantmenu(resId);
  console.log(resMenu);

  if (resMenu === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resMenu?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resMenu.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
  return (
    <div>
      <h1>{name}</h1>
      <p>{cuisines.join(', ')}</p>
      <p>{costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name} - {'Rs.'}{' '}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}{' '}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
