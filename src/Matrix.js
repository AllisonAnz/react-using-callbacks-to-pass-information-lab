import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {
  // Matrix, renders a div containing the ColorSelector component and another div 
  // within the nested div is a function called this.genMatrix() 
  // this function, this.props.values is used to return a map of JSX divs
  // in the process of returning each of these divs, genRow() is called, 
  // which return a collection of Cell components, 
  // The Cell component itself just renders a div, 
  // These two functions work together to return a series of divs, each containing another series of divs 
  // the actual color value stored in the data is passed into Cell as color={val}
  // Summary:
  // data is passed into the Matrix as an array of arrays of strings. 
  // on render, this data is mapped to JSX elements (with some CSS help)
  // these elements form rows of squares on the screen 

  // Update the Matrix Component:
  // To achieve this the Matrix component needs:
  //    A way for Matrix to keep track of the selected color (think state)
  //    A Method that takes a single argument of a hexadecimal color string (#fff) and sets the selected color to that 
  // Once those are set up, we will figure out how to use the component's state as well as the method that will update that state, in the ColorSelector and Cell components 
  constructor() {
    super()
    //1. set up state: a place to keep track of the selected color 
    this.state = {
      selectedColor: '#FFF'
    }
  }

  // 2. Create a method to update state: add a method that can change that state value 
  //    This method updates selectedColor with whatever is passed into it as an arg.
  setSelectedColor = (newColor) => {
    this.setState({
      selectedColor: newColor
    })
  }

  // Cell only needs to know the currently selected color, not change it. 
  // 3. We can pass this in to every Cell returned by genRow() as a prop called selectedColor. selectedColor={this.state.selectedColor}
  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.state.selectedColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )
  
  //Pass Date and Callback to Children:
  //  We already have two child components set to render ColorSelector and Cell 
  //  as mentioned ColorSelector is the interface where users will be able to select a color, so we need 
  //  access to setSelectedColor. 
  //  3. pass the needed function down as a prop setSelectedColor={this.setSelectedColor}

  
  render() {
    //rendered just above the cells, we have the ColorSelector componenent, which reders a row of colored divs
    //The colorSelector component should contain the interface for selecting a color 
    //once the color is selected, clicking on any particular cell should cause that cell to change to the selected color
    return (
      <div id="app">
        <ColorSelector setSelectedColor={this.setSelectedColor} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: learnSymbol
}