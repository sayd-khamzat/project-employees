import './App.css';
import {AppInfo} from './components/AppInfo/AppInfo';
import {SearchPanel} from './components/SearchPanel/SearchPanel';
import {AppFilter} from './components/AppFilter/AppFilter';
import {EmployeesList} from './components/EmployeesList/EmployeesList';
import {EmployeesAddForm} from './components/EmployeesAddForm/EmployeesAddForm';

function App() {
    return (
        <div className="App">
            <AppInfo/>
            <div className="searchPanel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployeesList/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;