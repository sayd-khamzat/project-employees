import './EmployeesListItem.css';

export function EmployeesListItem() {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="list-group-item-label">Sayd-Khamzat Tadaev</span>
            <input type="text" className="list-group-item-input" defaultValue="1000$"/>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button" className="btn-cookie btm-sm">
                    <i className="fas fa-cookie"></i>
                </button>
                <button type="button" className="btn-trash btm-sm">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
}