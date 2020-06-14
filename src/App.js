import React from 'react';
import logo from './logo.svg';
import './App.css';

//inserts a blank (default) table into the html
class Table extends React.Component {
render() {

  return(
    <table id = "boxes">

    </table>
  );
}
}

//contains the buttons on the page
class ButtonControls extends React.Component {
constructor(props) {
  super(props);
  this.state = {value: "Red"};

  this.selectColor = this.selectColor.bind(this);

}

selectColor(event) {

this.setState({value: event.target.value});
event.preventDefault();
//if you uncomment this code, it will show a popup box of the color you currently selected (just to show that the code works)
//alert(event.target.value);
}

render() {
  return(
    <div class = "buttonGroups">

    <div id = "buttonGroup1">
    <button>Add Row</button>
    <button>Remove Row</button>
    </div>

    <div id = "buttonGroup2">
    <button>Add Column</button>
    <button>Remove Column</button>
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
    </div>
    );
}


}



function App() {
  return (
    <div className = "App">
<ButtonControls/>
<Table/>



    </div>

  );
}

export default App;
