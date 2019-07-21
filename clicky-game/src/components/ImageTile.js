import React from "react";
import "./ImageTile.css"

 function ImageTile(props) {
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
     return (
         <div className = 'ImageTile' onClick={()=>props.handleClick(props.item)}>
             <img src={props.item.image} alt="puppy"></img>
         </div>
     )
 }

// function ImageTile({ item, handleClick }) {
//   return (
//     <div onClick={()=>handleClick(item)}>
//       <img src={item.image} alt="puppy" />
//     </div>
//   );
// }

export default ImageTile;
