import React from "react";
import "./App.css";
import ImageTile from "./components/ImageTile";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { randomBytes } from 'crypto';
import data from "./data.json";
import "./components/ImageTile.css";

class App extends React.Component {
  state = {
    data,
    score: "",
    clicked: []
  }

  /*
  val = {
    id: this.id,
    image: this.image,
    clicked: this.clicked
  }
  */
  
  evaluateGuess = (val) => {}

  handleClick = event => {

    const currentPup = 
      event.target.alt;
    
    const alreadyClickedPup = 
      this.state.clicked.indexOf(currentPup) > -1;

    if(alreadyClickedPup){
      this.setState({
        data: this.state.data.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clicked: [],
        score: ""
      });
        alert("You lose! Try again?");

    } else {
      this.setState({
        data: this.state.data.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clicked: this.state.clicked.concat(
          currentPup),
          score: this.state.score + 1
        },

        () => {
          if (this.state.score === 12) {
            alert("you clicked all the pups!");
            this.setState({
              data: this.state.data.sort(function (a, b) {
                return 0.5 - Math.random();
              }),
              clicked: [],
              score: 0
            });
          }
        }
      );
    }
  };


  render() {
    return (
      <div>
        <Header />
        <div className="image-container">
          {this.state.data.map(data => (
            <ImageTile
            handleClick={this.handleClick} 
            key={data.id}
            id={data.id}
            image={data.image}
              />
          ))}
        </div>
      </div>
    );
  }
}
export default App;