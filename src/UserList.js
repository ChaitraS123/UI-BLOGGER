import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const UserList = (props) => {
    const [posts, setPosts] = useState([])
    const [user, setUser] = useState({})
    const { id } = props.match.params
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then((response) => {
                setPosts(response.data)
            })

    }, [id])
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                setUser(response.data)
            })
    }, [id])
    return (
        <div>
            <h1>USERNAME:{user.name}</h1>
            <h2>Posts written by user</h2>
            {posts.map((el) => {
                return <li key={el.id}><Link to={`/posts/${el.id}`}>{el.title}</Link></li>
            })}

        </div>
    )
}
export default UserList