import {useEffect, useState} from "react";

import './App.scss';

import {useDispatch, useSelector} from 'react-redux';
import {onAddInputValue,onAddTask,onActiveTask} from "../../actions";
//1) Создание задачи: Пользователь должен иметь возможность добавлять новые задачи в список Todo. (сделано)
//2) Редактирование задачи: Пользователь должен иметь возможность редактировать текст задачи.
//3) Удаление задачи: Пользователь должен иметь возможность удалять задачи из списка.
//4) Пометка задачи как выполненной: Пользователь должен иметь возможность пометить задачу как выполненную или снять пометку.(сделано)
export const App = () => {
    const dispatch = useDispatch();
    const {inputValue,tasks} = useSelector(state => state);

    const tasksRender = tasks.map(item => (
        <div className='task-wrapper' key={item.id} onClick={()=>console.log(item.id)}>
            <input type="checkbox" onClick={() => dispatch(onActiveTask(item.id))}/>
            <p>{item.id}) --- {item.descr}</p>
        </div>
    ));
    return (
        <div className="App">
            <input type="text" onChange={(e)=>dispatch(onAddInputValue(e.currentTarget.value))}/>
            <button onClick={()=>dispatch(onAddTask({id:tasks.length + 1, descr:`${inputValue}`, active:false}))}>Add task</button>
            {tasksRender}
        </div>
    );
}