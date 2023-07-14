import { load } from 'redux-localstorage-simple';

let TASKS = load({namespace: 'todo-list'});

if (!TASKS || !TASKS.tasks ||!TASKS.tasks.length) {
    TASKS = {
        inputValue: '',
        editedInputValue: '',
        tasks: [{
            id:1,
            descr:'Buy milk for coffee!',
            active:false,
            activeEdit:false
        }],
    }
}

//баг посмотри после перезагрузки страницы чекбокс неправильно работает

const initialState = TASKS;

const vacancies = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_INPUT_VALUE':
            return {
                ...state,
                inputValue: action.payload
            }
        case 'EDIT_INPUT_VALUE':
            return {
                ...state,
                editedInputValue: action.payload
            }
        case 'ADD_TASK':
            return {
                ...state,
                inputValue: '',
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
        case 'EDIT_TASK':
            const { id, value } = action.payload;
            return {
                ...state,
                editedInputValue: value,
                tasks: state.tasks.map(item => {
                    if (item.id === id) {
                        item.activeEdit = !item.activeEdit;
                    }
                    return item;
                })
            }
        case 'ADD_EDIT_TASK':
            return {
                ...state,
                tasks: state.tasks.map(item => {
                    if (item.id === action.payload) {
                        item.descr = state.editedInputValue;
                    }
                    return item;
                })
            }
        default: return state
    }
}

export default vacancies;
