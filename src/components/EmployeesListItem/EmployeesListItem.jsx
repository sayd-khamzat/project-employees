import React from 'react';
import './EmployeesListItem.css';

const EmployeesListItem = (props) => {

    const {name, salary, onDelete, onToggleProp, increase, rise, updateSalary} = props;

    let classNames = "list-group-item d-flex justify-content-between";

    if (increase) {
        classNames += " increase";
    }

    if (rise) {
        classNames += " like";
    }

    const onUpdateSalary = (e) => {
        const value = e.target.value.replace(/[^0-9]/g, '');
        updateSalary(+value);
    }

    return (
        <li className={classNames}>
            <span className="list-group-item-label"
                  onClick={onToggleProp}
                  data-toggle="rise">{name}</span>

            <input type="text" className="list-group-item-input"
                   value={salary + '$'} onChange={onUpdateSalary}/>

            <div className="d-flex justify-content-center align-items-center">
                <button type="button"
                        className="btn-cookie btm-sm"
                        onClick={onToggleProp}
                        data-toggle="increase">
                    <i className="fas fa-cookie"></i>
                </button>
                <button type="button"
                        className="btn-trash btm-sm"
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
}

export default EmployeesListItem;