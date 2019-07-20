import React from "react";
import "./App.css";
import ImageTile from "./components/ImageTile";
import Header from "./components/Header";
import Footer from "./components/Footer";
import data from "./data.json";

class App extends React.Component {
  state = {
    data
  }

  /*
  val = {
    id: this.id,
    image: this.image,
    clicked: this.clicked
  }
  */
  
  evaluateGuess = (val) => {}

  handleClick = (val) => {
    if(val.clicked){
      console.log("You have already clicked this image!")
    } else {
      val.clicked = true
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="image-container">
          {this.state.data.map((obj, index) => {
            // ~ for(var index = 0; index < this.state.data.length; index++)
            // obj = this.state.data[index]
            return <ImageTile
                      key={"ImageTile-" + index}
                      // property item = this.state.data[index]
                      item={obj}
                      handleClick={this.handleClick} />;
          })}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
