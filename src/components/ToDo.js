import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ToDo = ({setId}) => {
    const [toDoDataArray,setToDoDataArray] = useState([]);

    useEffect( () => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(result => {
            setToDoDataArray(result.data)
        })
        .catch(error => console.log(error.message))
    },[])

    return <React.Fragment>
        <table>
            <thead>

                    <tr>
                        <th>
                            ToDo Id
                        </th>
                        <th>
                            Title
                        </th>
                        <th>
                            Status
                        </th>

                        <th>
                            Action
                        </th>
                    </tr>
            </thead>
            <tbody>
                {toDoDataArray.map((obj) => {
                    return (
                        <tr key={obj.id}>
                            <td>
                                {obj.id}
                            </td>
                            <td>
                                {obj.title}
                            </td>
                            <td>
                                {obj.completed ? "Complete" : "Incomplete"}
                            </td>
                            <td>
                                <button onClick={() => setId(obj.userId)}>View User</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>   
        
    </React.Fragment>
}

export default ToDo
