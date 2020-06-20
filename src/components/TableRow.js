/****************************************************************************************************
 * CSCI 39547: Projects in CSCI
 * Assignment 4
 * 
 * TableRow Component
 * 
 * Each row of the table, filled with proper number of cells, equal to colCount
 * Child of TableRow component, Parent of TableCol
***************************************************************************************************/
import React, { Component } from 'react';
import TableCol from './TableCol';
export class TableRow extends Component {
   createCol = function(){
       let cells = [];
       let colCount = this.props.tableStates.colCount;
       for(let i =0; i<colCount; i++){
           cells.push(<TableCol/>);
       }
       return cells;
   }
    render() {
        return (
        <tr>{this.createCol}</tr>
        )
    }
}

export default TableRow
