import Redux from 'redux'

const initialState = {
    username: '',
    userprofile: {},
    repos: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'update_username':
            return {...state, username: action.username}
        break
        case 'update_userprofile': 
            return {...state, userprofile: action.userprofile}
        break
        case 'update_repos':
            return {...state, repos: action.repos}
        default: 
            return state
    }
}

export default reducer