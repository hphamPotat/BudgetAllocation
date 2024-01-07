import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        let value = event.target.value;
        console.log(value - totalExpenses);

        if (value > 20000){
            alert('The value cannot exceed 20000');
        }
        else if (value < totalExpenses){
            alert('The value cannot be lower than amount spent so far')
        }
        // else if (value > totalExpenses){
        //     alert('The value cannot exceed remaining funds')
        // }
        else setNewBudget(value);
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {`${currency}`}     </span>
            <input type='number' step='10' value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
}

export default Budget;