import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ShowPost = (props) => {
    const { id } = props.match.params
    const [userid, setuserid] = useState('')
    const [username, setUsername] = useState({})
    const [comments, setComments] = useState([])
    console.log(id)
    console.log("id", userid)
    const [user, setUser] = useState({})
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                console.log(response.data)
                setUser(response.data)
                setuserid(response.data.userId)
            })

    }, [id])
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${parseInt(userid)}`)
            .then((response) => {
                setUsername(response.data)
            })
    }, [userid])
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${parseInt(userid)}`)
            .then((response) => {
                setComments(response.data)
            })
    }, [userid])

    return (
        <div>
            {username.name && <h2>NAME:{username.name}</h2>}
            {user.title ? <div>
                <h2>Title:{user.title}</h2>
                <h2>Body:{user.body}</h2>
            </div> : ''}
            <h2>COMMENTS</h2>
            {comments.map((el) => {
                return <li key={el.id}>{el.body}</li>
            })
            }
            <Link to={`/users/${userid}`}>{`More posts of ${username.name}`}</Link>
        </div>
    )
}
export default ShowPost