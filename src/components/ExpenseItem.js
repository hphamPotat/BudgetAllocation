import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const {dispatch, currency} = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    }

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        }

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        }

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense 
        })
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{`${currency}`} {props.cost}</td>
            <td><button style={{border: 'none', width: '30px', borderRadius: '50%', backgroundColor: '#4fac5c', color: 'white'}} onClick={event => increaseAllocation(props.name)}>+</button></td>
            <td><button style={{border: 'none', width: '30px', borderRadius: '50%', backgroundColor: '#ae2318', color: 'white'}} onClick={event => decreaseAllocation(props.name)}>-</button></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense} /></td>
        </tr>
    );
}

export default ExpenseItem;
