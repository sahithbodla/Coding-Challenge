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

        <strong>User Details </strong><br /><br />
        ToDo Id: {toDoId} <br />
        ToDo Title: {title} <br />
        User Id : {userData.id} <br />

        Name: {userData.name} <br />
        Email: {userData.email} <br />
        </div>
    </React.Fragment>
}

export default UserDetail
