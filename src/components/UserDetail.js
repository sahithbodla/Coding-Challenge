import React,{useState,useEffect} from 'react';
import axios from "axios";
import './UserDetail.css'

const UserDetail = ({id, toDoId, title}) => {
    const [userData, setUserData] = useState('');
    const url = `https://jsonplaceholder.typicode.com/users/${id}`

    useEffect( () => {
        axios.get(url)
        .then(result => setUserData(result.data))
        .catch(error => console.log(error.message))
    },[userData])

    return <React.Fragment>
        <div className="details">
            <div className="card border-secondary">
                <div className="card-header">
                    <h4>User Details</h4> 
                </div>
                <div className="card-body">
                    <div className="card-text">
                        <table className="table table-striped table-bordered table-hover">
                            <tbody>
                                <tr>
                                    <th>ToDo Id:</th>
                                    <td>{toDoId}</td>
                                </tr>
                                <tr>
                                    <th>ToDo Title:</th>
                                    <td>{toDoId}</td>
                                </tr>
                                <tr>
                                    <th>ToDo Id:</th>
                                    <td>{title}</td>
                                </tr>
                                <tr>
                                    <th>Name:</th>
                                    <td>{userData.name}</td>
                                </tr>
                                <tr>
                                    <th>Email:</th>
                                    <td>{userData.email}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>        
        </div>
    </React.Fragment>
}

export default UserDetail
