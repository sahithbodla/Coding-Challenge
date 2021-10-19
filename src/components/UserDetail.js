import React,{useState,useEffect} from 'react';
import axios from "axios";

const UserDetail = ({id}) => {
    const [userData, setUserData] = useState('');
    const url = `https://jsonplaceholder.typicode.com/users/${id}`

    useEffect( () => {
        axios.get(url)
        .then(result => setUserData(result.data))
        .catch(error => console.log(error.message))
    },[userData])

    return <React.Fragment>
        ToDo Id : {userData.id} <br />
        
        Name: {userData.name} <br />
        Email: {userData.email} <br />
    </React.Fragment>
}

export default UserDetail
