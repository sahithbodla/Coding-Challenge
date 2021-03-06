import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import './ToDo.css';

const ToDo = ({setId,setToDoId,setTitle}) => {
    const [toDoDataArray,setToDoDataArray] = useState([]);
    const [doSort,setToDoSort] = useState(null);
    const [search,setSearch] = useState('');
    const searchRef = useRef();

    let newArray;

    if(!search){
        newArray = [...toDoDataArray];
    } else {
        newArray = toDoDataArray.filter((obj) => {
            for(let key in obj){
                if(obj[key].toString().indexOf(search,0) !== -1 && key !== "userId" && key !== "completed") {
                    return true;
                }
            }
            return false;
        })
    }

    if(doSort !== null){
        newArray.sort((a,b) => {
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
        <div className="left-margin">
            <div className="containr">
                <h3>ToDos</h3>
                <input type="text" placeholder="Search" ref={searchRef} onChange={() => setSearch(searchRef.current.value)}/>
            </div>       
            <table className="table table-striped table-bordered table-hover">
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
                    {newArray.map((obj) => {
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
                                    <button className="btn btn-secondary" onClick={() => setData(obj.userId,obj.id,obj.title)}>View User</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </React.Fragment>
}

export default ToDo
