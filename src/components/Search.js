import React, { Component } from 'react'
import {connect} from 'react-redux'

class Search extends Component {

    onHandleChange = (e) => {
        let {dispatch} = this.props
        dispatch({type: 'update_username', username: e.target.value})
      }
    
      onUserSearch = () => {
        let {dispatch} = this.props
        let {username} = this.props
        fetch(`https://api.github.com/users/${username}`)
          .then(res => {
            return res.json()
          })
          .then(res => {
            dispatch({type: 'update_userprofile', userprofile: res})
          })
      }
    
      onReposFetch = () => {
        let {dispatch} = this.props
        let {repos_url} = this.props.userprofile
        fetch(repos_url)
          .then(res => {
            return res.json()
          })
          .then(res => {
            dispatch({type: 'update_repos', repos: res})
          })
      }

    render() {
        const {userprofile} = this.props
        const repos = this.props.repos.map((repo, i) => {
          return <li key={i}>{repo.name}</li>
        })
    return(
        <div className='Center'>
            <h1>{this.props.username}</h1>
            <input 
                type='text'
                onChange={this.onHandleChange}
                value={this.props.user} />
            <button onClick={this.onUserSearch}>Search</button>
            <hr />
            <h3>{userprofile.login}</h3>
            <img src={userprofile.avatar_url} />
            <br />
            <button onClick={this.onReposFetch}>Fetch Repos</button>
            <br />
            <ul className='ListCenter'>{repos}</ul>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      username: state.username,
      userprofile: state.userprofile,
      repos: state.repos
    }
  }

  export default connect(mapStateToProps)(Search);