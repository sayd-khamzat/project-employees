import EmployeesListItem from '../EmployeesListItem/EmployeesListItem';
import './EmployeesList.css';

export function EmployeesList({employeesData, onDelete, onToggleProp, updateSalary}) {

    // const employeesElements = employeesData.map(item => <EmployeesListItem key={item.id} name={item.name} salary={item.salary}/>)

    const employeesElements = employeesData.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem key={id} {...itemProps}
                               onDelete={() => onDelete(id)}
                               updateSalary={(salary) => updateSalary(id, salary)}
                               onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
                                //e -> получаем значение из data-toggle
        )
    })

    return (
        <div>
            <ul className="app-list list-group">
                {employeesElements}
            </ul>
        </div>
    );
}