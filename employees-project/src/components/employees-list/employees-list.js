import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item; //деструктиризація: витягуємо з масиву ID і всі інші властивості обєднюємо в ...itemProps

        return ( 
            <EmployeesListItem key = {id} {...itemProps}/>//розгорнули масив через SPREAD оператор = <EmployeesListItem name={item.name} salary={item.salary}/>
        )
    })

    console.log(elements);
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;