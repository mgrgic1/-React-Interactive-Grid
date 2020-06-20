/****************************************************************************************************
 * CSCI 39547: Projects in CSCI
 * Assignment 4
 * 
 * Table Component
 * 
 * This component represents each individual cell of the table
 * Parent of TableRow, grandparent of TableCol components
***************************************************************************************************/
import React, { Component } from 'react';
import TableRow from './TableRow';

export class Table extends Component {
    createTable = function(){
        let cells = [];
        let rowCount= this.props.appStates.rowCount;
        for(let i =0; i<rowCount; i++){
            cells.push(<TableRow tableStates = {this.props.appStates}/>);
        }
        return cells;
    }

    render() {
        return (
            <table>
            <tr><td></td></tr>

            </table>
        )
    }
}

export default Table
