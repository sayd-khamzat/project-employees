import {EmployeesListItem} from '../EmployeesListItem/EmployeesListItem';
import './EmployeesList.css';

export function EmployeesList() {
    return (
        <div>
            <ul className="app-list list-group">
                <EmployeesListItem/>
                <EmployeesListItem/>
                <EmployeesListItem/>
            </ul>
        </div>
    );
}