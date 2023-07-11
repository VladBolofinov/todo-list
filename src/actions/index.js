export const onAddInputValue = (value) => {
    return {
        type: 'ADD_INPUT_VALUE',
        payload: value
    }
}

export const onAddTask = (value) => {
    return {
        type: 'ADD_TASK',
        payload: value
    }
}

export const onActiveTask = (id) => {
    return {
        type: 'TASK_STATUS',
        payload: id
    }
}

export const onDeleteTask = (id) => {
    return {
        type: 'DELETE_TASK',
        payload: id
    }
}
