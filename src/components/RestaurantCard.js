import { CDNURL } from '../utils/constants';

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, costForTwo, sla } = props?.resData?.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={`${CDNURL}${props.resData.info.cloudinaryImageId}`}
        alt=""
      />
      <h3 style={{ margin: 0 }}>{name}</h3>
      <p>{cuisines?.slice(0, 3).join(', ')}</p>
      <p>{avgRating} stars</p>
      <p>{costForTwo} </p>
      <p>{sla?.deliveryTime} minutes</p>
    </div>
  );
};

export default RestaurantCard;
