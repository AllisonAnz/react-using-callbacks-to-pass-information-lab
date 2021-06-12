import React, { Component } from 'react';

export default class Cell extends Component {
  // We can see that this color prop is used to set the initial state of the component 
  // and that state value is then used to modify the background color of the returned div:

  //5. We now need to configure our Cell comp. so that when it is clicked, it changes color to the currently 
  //   selected color. Since we're already passing down the selected color in genRow() in the Matrix.js 
  //   we should have this.props.selectedColor at our disposal For Cell. 
  //  We can set up another click event, just like ColorSelector. only this time 
  //  we'll use a handleClick class method 

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleClick = () => {
    this.setState({
      color: this.props.selectedColor
    })
  }
  
  //onClick added 
  render() {
    return (
      <div onClick={this.handleClick} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}

