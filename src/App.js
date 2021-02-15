import React from 'react'
import { Link, Route, Router } from 'react-router-dom'
import Users from './Users'
import Posts from './Posts'
import Home from './Home'
import ShowPost from './ShowPost'
import UserList from './UserList'

const App = (props) => {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand text-white" href="#">UI BlOGGER  </a>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item text-white ">
              <Link to="/">Home</Link>{'/'}

            </li>
            <li class="nav-item text-white">
              <Link to="/users">Users</Link>{'/'}

            </li>
            <li class="nav-item text-white">
              <Link to="/posts">Posts</Link>

            </li>

          </ul>
        </div>


      </nav>



      <Route path="/" component={Home} />
      <Route path="/users" component={Users} exact={true} />
      <Route path="/posts" component={Posts} exact={true} />
      <Route path="/users/:id" component={UserList} />
      <Route path="/posts/:id" component={ShowPost} />


    </div>
  )
}
export default App;