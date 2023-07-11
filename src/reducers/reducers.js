const initialState = {
    inputValue: '',
    tasks:[
        {id:1,descr:'Buy milk for coffee!',active:false}
    ]
}

const vacancies = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_INPUT_VALUE':
            return {
                ...state,
                inputValue: action.payload
            }
        case 'ADD_TASK':
            return {
                ...state,
                tasks: state.tasks.concat(action.payload)
            }
        case 'TASK_STATUS':
            return {
                ...state,
                tasks: state.tasks.map(item => {
                    if (item.id === action.payload) {
                        item.active = !item.active;
                    }
                    return item;
                })
            }
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(item => item.id !== action.payload)
            }
        default: return state
    }
}

export default vacancies;