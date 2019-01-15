import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import friends from "./friends.json";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    nav: {
      name: "Clicky Game",
      result: "Click an image to begin!",
      score: 0,
      topScore: 0
    }
  };

   //Every clikck causes cards to shuffle
   clickCard = id => {
    var friends = this.shuffle();

    //Retrieving number of clicks for current card selected (through id)
    var friend = friends.find((f) => {
      return f.id === id;
    }); 

    var nav = this.state.nav

     //Storing number of player card clicks  
     friend.clicked = friend.clicked + 1;
     //Click count stored
     var numClicked = friend.clicked;

     //If player loses (clicking on card more than once)
     if (numClicked === 2) {
        //Setting number of times cards have clicked back to zero
        friends.forEach(item => {item.clicked = 0;});
        friends.clicked = 0;  
        nav.result = "You Guessed Incorrectly!";
        nav.score = 0;
        // Reset arrays (saving new state and display changes)
        //this.setState({ friends, nav });
      }
          //If player is successful (only clicks once)  
          else { 
            nav.result = "You Guessed Correctly!";
            nav.score = nav.score + 1;
            if (nav.score > nav.topScore) {
              nav.topScore = nav.topScore + 1; 
            }           
              //Reset arrays (saving new state and display changes)
              //this.setState({ friends, nav });
          } 
        this.setState({ friends, nav });     
        //console.log(id);
   };

   //Function to shuffle cards
   shuffle = () => {
    var myShuffle = this.state.friends;
    var i = myShuffle.length, j, temp;
     while(--i > 0) {
       j = Math.floor(Math.random() * (i+1));
       temp = myShuffle[j];
       myShuffle[j] = myShuffle[i];
       myShuffle[i] = temp;
     }
  return myShuffle;
  }


  //Mouse hovering over a card image (represented by x) causes the card to increase in size
  bigImage = (x) => {
    x.style.height = "64px";
    x.style.width = "64px";
  }
  
  normalImage = (x) => {
    x.style.height = "32px";
    x.style.width = "32px";
  }  

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Nav nav={this.state.nav} />        
        <Header />
        {this.state.friends.map(friend => (
          <FriendCard
            clickCard={this.clickCard}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
        <Footer />
      </Wrapper>
    );
  }
}



export default App;
