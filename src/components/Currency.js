import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {
    const { currency, dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState('£');


    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });

        setNewCurrency(event.target.value);
    }

    return (
        <select style={{backgroundColor: '#93e499', width: '261px', height: '58px'}} id="currency" onChange={(event) => handleCurrencyChange(event)}>
            <option hidden>Currency (£ Pound)</option>
            <option value="$" name="dollar">$ Dollar</option>
            <option defaultValue value="£" name="pound">£ Pound</option>
            <option value="€" name="euro">€ Euro</option>
            <option value="₹" name="ruppee">₹ Ruppee</option>
        </select>
    );
}

export default Currency;