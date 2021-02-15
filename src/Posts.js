import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Posts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                setPosts(response.data)
            })

    })

    return (
        <div>
            <h2>Total Posts-{posts.length}</h2>
            {posts.map((el) => {
                return <li key={el.id}><Link to={`/posts/${el.id}`}>{el.title}</Link></li>
            })}

        </div>
    )
}
export default Posts