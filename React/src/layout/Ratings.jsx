import React from 'react'
import { IoStarHalfSharp, IoStarSharp, IoStarOutline } from "react-icons/io5";


const Ratings = ({ ratingofproduct }) => {

  const stars = ({ ratingofproduct }) => {

    const starComponents = [];
    let i=1;
    for ( i >= 1; i <= 5; i++) {
      const star =
        ratingofproduct >= i
          ? <IoStarSharp key={i} />

          
          : ratingofproduct >= i - 0.5
            ? <IoStarHalfSharp key={i} />
            : <IoStarOutline key={i} />
      starComponents.push(star);
    }
    return starComponents;
  };

  

  return (
    <div>

      {stars({ ratingofproduct })}

    </div>
  )

};

export default Ratings
