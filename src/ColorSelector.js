import React, { Component } from 'react';

export default class ColorSelector extends Component {
  // ColorSelector already has some basic divs rendering 
  // each div el is rendered from an array of hexadecimal color strings, with its backgroundColor set 
  // to the current string in the mapping process 
  // We need to update this code so that when any one of these divs is clicked the color value of that div becaomes 
  // the selected color in the Matrix. 
  // 4. for click events, we know we'll have to add an element and provide a callback on the div element itself.
  //    onClick={callback} in the return
  //    inside the cb, call this.props.setSelectedColor() 
  //    and write a function inside the map to access the color values needed
  //    Now clicking on a particular div inside ColorSelector should now set state in Matrix 
  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      let callback = () => this.props.setSelectedColor(str)
      return <div onClick={callback} key={idx} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
}
