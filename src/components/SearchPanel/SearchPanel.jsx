import styles from './SearchPanel.css';

export function SearchPanel() {
    return (
        <div>
            <input type="text" className="form-control search-input" placeholder="Найти сотрудника"/>
        </div>
    );
}