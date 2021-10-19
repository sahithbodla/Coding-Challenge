import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ToDo = ({setId,setToDoId,setTitle}) => {
    const [toDoDataArray,setToDoDataArray] = useState([]);
    const [doSort,setToDoSort] = useState(null);

    if(doSort !== null){
        toDoDataArray.sort((a,b) => {
            if(a.id<b.id){
                return doSort.direction === "ascending" ? -1 : 1
            } else if(a.id>b.id){
                return doSort.direction === "ascending" ? 1 : -1
            } else return 0;
            
        });
    } 

    const configSort = () => {
        let direction = "ascending"
        if(doSort && doSort.direction === "ascending"){
            direction = "descending"
        }
        setToDoSort({direction})
    }

    useEffect( () => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(result => {
            setToDoDataArray(result.data)
        })
        .catch(error => console.log(error.message))
    },[])

    const setData = (id,toDoId,title) => {
        setId(id);
        setTitle(title);
        setToDoId(toDoId);
    }

    return <React.Fragment>
        <table>
            <thead>

                    <tr>
                        <th onClick={configSort}>
                            ToDo ID
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
                                <button onClick={() => setData(obj.userId,obj.id,obj.title)}>View User</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>   
        
    </React.Fragment>
}

export default ToDo
