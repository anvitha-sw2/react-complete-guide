<<<<<<< HEAD
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {    
    return (
    <div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
    </div>
    );
}

=======
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {    
    return (
    <div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
    </div>
    );
}

>>>>>>> 10c10eedb72c573e6756160892e10951645d3b13
export default ExpenseItem;