import { CDNURL } from '../utils/constants';

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, costForTwo, sla } = props?.resData?.info;

  return (
    <div class="border border-1 my-4 ml-4 h-[350px] mx-auto max-w-[200px] rounded-lg overflow-hidden hover:shadow-2xl font-swiggy p-1">
      <img
        class="w-full"
        src={`${CDNURL}${props.resData.info.cloudinaryImageId}`}
        alt=""
      />
      <div class="">
        <div class="font-bold font-swiggybold text-xl">{name}</div>
        <p className="font-swiggybold">
          {avgRating}•{sla?.deliveryTime} mins
        </p>
        <p>{cuisines?.slice(0, 3).join(', ')}</p>
        <p>{costForTwo} </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
