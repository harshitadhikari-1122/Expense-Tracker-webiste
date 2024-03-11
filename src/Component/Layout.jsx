import React, { useState } from 'react'
import "./Layout.css";

const Layout = () => {
    const [amount, setAmount] = useState(0);
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [history, setHistory] = useState([]);

    function addValue() {
        const textInput = document.getElementById('text-input');
        const amountInput = document.getElementById('amount-input');
        
        if (textInput && amountInput && textInput.value && amountInput.value) {
            const text = textInput.value;
            const amountValue = parseInt(amountInput.value);
    
            // Update amount
            setAmount(prevAmount => prevAmount + amountValue);
    
            // Update income or expense based on amount sign
            if (amountValue > 0) {
                setIncome(prevIncome => prevIncome + amountValue);
            } else {
                setExpense(prevExpense => prevExpense - amountValue);
            }
    
            // Add transaction to history
            setHistory(prevHistory => [...prevHistory, { text, amount: amountValue }]);
    
            // Clear input fields
            textInput.value = '';
            amountInput.value = '';
        }
    };
    return (
        <div className='layout-container'>
            <div className='layout-head'>
                <h1>Expense Tracker</h1>
            </div>
            <div className='tracker-hist'>
                <div><h3>Your Balance</h3></div>
                <div><h3>${amount}</h3></div>
            </div>
            <div className='income-expense-folder'>
                <div className='income-folder'>
                    <div className='amount_folder'>
                        <h3>INCOME</h3>
                    </div>
                    <div className='amount_folder'>
                        <h3 id="green-color">${income}</h3>
                    </div>
                </div>
                <div className='expense-folder'>
                    <div className='amount_folder'>
                        <h3>Expense</h3>
                    </div>
                    <div className='amount_folder'>
                        <h3 id="red-color">{expense}</h3>
                    </div>
                </div>
            </div>
            <div className='History_table'>
                <div className='history_head'>
                    <h3>History</h3>
                </div>
                <div className='history_table'>
                    {history.map((item, index) => (
                        <div className={`list-table ${item.amount > 0 ? 'positive' : 'negative'}`} key={index}>
                            <div className='list-head'>
                                <h4>{item.text}</h4>
                            </div>
                            <div className='list-details'>
                                <h4>{item.amount > 0 ? `+${item.amount}` : `${item.amount}`}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='input_data'>
                <div className='input_head'>
                    <h3>Add new transaction</h3>
                </div>
                <div className='input_text'>
                    <div className='text'>
                        <div> <h3>Text</h3></div>
                        <div> <input id="text-input" type="text" placeholder='Enter text...' required></input></div>
                    </div>
                    <div className='text'>
                        <div><h3>Amount</h3></div>
                        <div> <h4>(negative-expense ,positive-epxense)</h4></div>
                        <div> <input id="amount-input" type="number" placeholder='Enter Amount...' required></input></div>
                    </div>
                    <div className='submit'>
                        <button onClick={addValue}>Add Transaction</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout;
