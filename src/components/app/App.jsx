import {useEffect, useState} from "react";

import './App.scss';

import {useDispatch, useSelector} from 'react-redux';
import {onAddInputValue,onAddTask,onActiveTask,onDeleteTask,onEditTask,onAddEditInputValue,onAddEditTask} from "../../actions";
//1) Создание задачи: Пользователь должен иметь возможность добавлять новые задачи в список Todo. (сделано)
//2) Редактирование задачи: Пользователь должен иметь возможность редактировать текст задачи.(cltkfyj)
//3) Удаление задачи: Пользователь должен иметь возможность удалять задачи из списка.(сделано)
//4) Пометка задачи как выполненной: Пользователь должен иметь возможность пометить задачу как выполненную или снять пометку.(сделано)
//cделай сохранение стора в локал сторэдж через мидлввар
//proptypes добавь вместо тайпскрипта


export const App = () => {
    const dispatch = useDispatch();
    const {inputValue,editedInputValue,tasks} = useSelector(state => state);

    const tasksRender = tasks.map(item => (
        <div className='task-wrapper' key={item.id} onClick={()=>console.log(item.id)}>
            <input type="checkbox" onClick={() => dispatch(onActiveTask(item.id))}/>
            <button onClick={() => dispatch(onDeleteTask(item.id))}>DELETE</button>
            <button onClick={()=>dispatch(onEditTask(item.id,item.descr))}>EDIT</button>
            {item.activeEdit
                ?   <div>
                    <button onClick={() => {
                        dispatch(onAddEditTask(item.id));
                        dispatch(onEditTask(item.id));
                    }}>ACCEPT</button>
                    <input type="text" value={editedInputValue} autoFocus={true} onChange={(e)=>{
                        dispatch(onAddEditInputValue(e.currentTarget.value));
                        }
                    }/>
                    </div>
                : <p>{item.id}) --- {item.descr}</p>}
        </div>
    ));
    return (
        <div className="App">
            <input type="text" value={inputValue} onChange={(e)=>dispatch(onAddInputValue(e.currentTarget.value))}/>
            <button onClick={()=>dispatch(onAddTask({id:tasks.length + 1, descr:`${inputValue}`, active:false}))}>Add task</button>
            {tasksRender}
        </div>
    );
}