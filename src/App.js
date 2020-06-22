import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table';

class App extends Component{
  //constructor to initialize state values
  constructor(props){
    super(props);
    //assigning initial states
    this.state = {
      rowCount: 5,
      colCount: 5,
      selectedColor: ""
    };
  } //end constructor

//*****Start add and remove methods******//
  rowAdd = ()=>{
    //obtaining values from state to store in temporary variables
    let rows = this.state.rowCount;
    let cols = this.state.colCount;
    rows++; //incrementation of row count

    if(cols == 0){//column count must also increase if grid is empty
      cols++;
      this.setState({
        rowCount: rows,
        colCount: cols
      });
    }//end if
    else{
      this.setState({rowCount: rows});
    }//end else

  }//end rowAdd method
  
  rowRemove = ()=>{
    let rows = this.state.rowCount;
    //only change value if rows is >= 0. Therefore rowCount can never fall below 0
    if(rows >= 0){
      rows--;
      this.setState({rowCount: rows});
    }//end if
  }//end rowRemove method

  colAdd = ()=>{
    let rows = this.state;
    let cols = this.state;
    //cols++; //incrementing column var, to update state
   let newcol = cols+1;
    if(rows == 0){//row count must also increase if grid is empty
    //  rows++;
      this.setState({
        rows: rows+1,
        cols: newcol,
      });
    }//end if
    else{
      this.setState({newcol});
    }//end else
  }//end colAdd method

  colRemove = ()=>{
    let cols = this.state.colCount;
    //only change value if rows is >= 0. Therefore rowCount can never fall below 0
    if(cols >= 0){
      cols--;
      this.setState({colCount: cols});
    }//end if
  }//end colRemove method
//*****End add and remove methods******//

  render(){
    
    return(    
    	
      <div class = "App">
      <div id = "buttonGroup1">
           <button onClick = {this.rowAdd}>Add Row</button>
           <button onClick = {this.rowRemove}>Remove Row</button>
           </div>
      
           <div id = "buttonGroup2">

           <button onClick = {this.colAdd}>Add Column</button>
           <button onClick = {this.colRemove}>Remove Column</button>
           </div>
      
           <div id = "buttonGroup3">
          <button>Fill All with Selected Color</button>
           <button>Fill Uncolored with Selected Color</button>
           <button>Clear Colors</button>
           </div>
              
           <form>
           <p>Selected Color:</p>
           <select onChange = {this.selectColor}>
           	<option value = "red">Red</option>
       	    <option value = "orange">Orange</option>
       	    <option value = "yellow">Yellow</option>
       	    <option value = "green">Green</option>
       	    <option value = "blue">Blue</option>
       	    <option value = "indigo">Indigo</option>
       	    <option value = "violet">Violet</option>
       	    <option value = "black">Black</option>
           </select>
           </form>


        <Table appStates = {this.state}/>
        </div>
    );
  }
}


export default App;
