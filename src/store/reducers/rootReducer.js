const initState = {
    user: [
        { id: 1, name: 'Lil nat ' },
        { id: 2, name: '228 ' },
    ],
    posts: []
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            console.log('run into delete user', action);
            let users = state.user; // Corrected property name
            users = users.filter(item => item.id !== action.payload.id)
            return {
                ...state, user: users // Corrected property name
            };
        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 10000000000)
            let newUser = {
                id: id, name: `random-${id}`
            }
            return {
                ...state, user: [...state.user, newUser]
            };
        default:
            return state;
    }
}

export default rootReducer;