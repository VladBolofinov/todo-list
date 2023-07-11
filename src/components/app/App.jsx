import {useEffect, useState} from "react";

import './App.scss';

import {useDispatch, useSelector} from 'react-redux';
import {} from "../../actions";
//1) Создание задачи: Пользователь должен иметь возможность добавлять новые задачи в список Todo.
//2) Редактирование задачи: Пользователь должен иметь возможность редактировать текст задачи.
//3) Удаление задачи: Пользователь должен иметь возможность удалять задачи из списка.
//4) Пометка задачи как выполненной: Пользователь должен иметь возможность пометить задачу как выполненную или снять пометку.
export const App = () => {
    const dispatch = useDispatch();
    const {} = useSelector(state => state);

    return (
        <div className="App">
            <input type="text"/>
            <button>Add task</button>
            <p className='task'>Buy coffee tomorrow!</p>
        </div>
    );
}