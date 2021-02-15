import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setUsers(response.data)
            })
    }, [])

    return (
        <div>
            <h1>Users List-{users.length}</h1>
            {users.map((el) => {
                return <li key={el.id}><Link to={`/users/${el.id}`}>{el.name}</Link></li>
            })}

        </div>
    )
}
export default Users