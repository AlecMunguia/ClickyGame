import React from "react";
import "./ImageTile.css"

 const ImageTile = (props) => (
     /*
    props = {
        item: this.state.data[index],
        handleCLick: this.handleClick(val)
    }

    props.item: {
        id: this.id,
        image: this.image,
        clicked: this.clicked
    }
     */
     
         <div className = 'ImageTile' onClick={props.handleClick}>
             <img alt = {props.image.replace(".jpg", "")} src={props.image} />
         </div>
     )
 

// function ImageTile({ item, handleClick }) {
//   return (
//     <div onClick={()=>handleClick(item)}>
//       <img src={item.image} alt="puppy" />
//     </div>
//   );
// }

export default ImageTile;
