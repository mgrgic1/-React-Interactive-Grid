/****************************************************************************************************
 * CSCI 39547: Projects in CSCI
 * Assignment 4
 * 
 * TableCol Component
 * 
 * This component represents each individual cell of the table
 * Child of TableRow and Table components, GrandChild of Table
***************************************************************************************************/
import React, { Component } from 'react';
export class TableCol extends Component {
    render() {
        return (
            <td onClick = 'selectColor()'></td>
        )
    }
}

export default TableCol
