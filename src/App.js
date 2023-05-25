import React from 'react';
import {AppInfo} from './components/AppInfo/AppInfo';
import SearchPanel from './components/SearchPanel/SearchPanel';
import AppFilter from './components/AppFilter/AppFilter';
import {EmployeesList} from './components/EmployeesList/EmployeesList';
import EmployeesAddForm from './components/EmployeesAddForm/EmployeesAddForm';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employeesData: [
                {id: 1, name: 'Sayd-Khamzat Tadaev', salary: 2000, increase: false, rise: true},
                {id: 2, name: 'Khamzat Tadaev', salary: 1000, increase: true, rise: false},
                {id: 3, name: 'S-KH Tadaev', salary: 3000, increase: false, rise: false}
            ],
            term: '',
            filter: 'all'
        }
    }

    //1 способ
    deleteItem1 = (id) => { // Удаление сотрудника
        this.setState(({employeesData}) => {

            const index = employeesData.findIndex((elem) => elem.id === id); //получение индекса удаляемого сотрудника

            const before = employeesData.slice(0, index); //копируем массив до нашего индекса
            const after = employeesData.slice(index + 1); //копируем массив после нашего индекса

            const newArr = [...before, ...after]; //сборка нового массива

            return {
                employeesData: newArr
            }
        })
    }
    //2 способ
    deleteItem = (id) => { // Удаление сотрудника
        this.setState(({employeesData}) => ({
            employeesData: employeesData.filter(item => item.id !== id)
        }))
    }

    addItem = (name, salary) => { // Добавление сотрудника
        this.setState(({employeesData}) => {
            const newItem = {
                id: employeesData.length + 1,
                name: name,
                salary: salary,
                increase: false,
                rise: false
            }
            return {
                employeesData: [...employeesData, newItem]
            }
        })
    }

    onToggleProp = (id, prop) => { // Переключатель increase и rise
        //1 способ
        // this.setState(({employeesData}) => {
        //     const index = employeesData.findIndex(elem => elem.id === id);
        //
        //     const old = employeesData[index];
        //     const newItem = {...old, increase: !old.increase};
        //     const newArr = [...employeesData.slice(0, index), newItem, ...employeesData.slice(index + 1)];
        //
        //     return {
        //         employeesData: newArr
        //     }
        // })

        //2 способ
        this.setState(({employeesData}) => ({
            employeesData: employeesData.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => { // Поиск сотрудника
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    onUpdateSearch = (term) => { // Редактирование строки поиска
        this.setState({
            // term: term
            term //равнозначно
        })
    }

    filterPost = (items, filter) => { // Фильтр данных сотрудников
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise === true);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => { // Установление значения кнопок фильтра
        this.setState({
            filter: filter
        })
    }

    updateSalary = (id, newSalary) => { // Изменение значения зарплаты сотрудника
        this.setState(prevState => ({
            employeesData: prevState.employeesData.map(
                elem => elem.id === id ? {...elem, salary: newSalary} : elem)
        }))
    }

    render() {

        const {employeesData, term, filter} = this.state;

        const employees = this.state.employeesData.length;
        const increased = this.state.employeesData.filter(item => item.increase === true).length;

        //В фильтр передаем сразу массив сотрудников, полученных из поиска
        const visibleData = this.filterPost(this.searchEmp(employeesData, term), filter);

        return (
            <div className="App">
                <AppInfo employees={employees} increased={increased}/>

                <div className="searchPanel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>

                <EmployeesList employeesData={visibleData}
                               onDelete={this.deleteItem}
                               onToggleProp={this.onToggleProp}
                               updateSalary={this.updateSalary}/>

                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;