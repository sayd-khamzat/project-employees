import React from 'react';
import './AppFilter.css';

const AppFilter = ({filter, onFilterSelect}) => {

    const buttonData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'moreThen1000', label: 'З/П больше 1000$'}
    ];

    const buttons = buttonData.map(({name, label}) => {

        const active = filter === name; //if (filter === name) return true возвращаем в active
        //и в итоге в active может быть либо true, либо false

        const clazz = active ? "btn btn-light" : "btn btn-outline-light";

        return (
            <button className={clazz}
                    key={name}
                    type="button"
                    onClick={() => onFilterSelect(name)}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
}

export default AppFilter;