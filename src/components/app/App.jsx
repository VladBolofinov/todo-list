import './App.scss';
import {useDispatch, useSelector} from 'react-redux';
import {onAddInputValue,
        onAddTask,
        onActiveTask,
        onDeleteTask,
        onEditTask,
        onAddEditInputValue,
        onAddEditTask} from "../../actions";

import { Checkbox } from '@mantine/core';




//proptypes добавь вместо тайпскрипта


export const App = () => {
    const dispatch = useDispatch();
    const {inputValue,editedInputValue,tasks} = useSelector(state => state);

    const tasksRender = tasks.map(item => (
        <div className='task-wrapper' key={item.id} onClick={()=>console.log(item.id)}>
            <Checkbox
                color="green"
                radius="sm"
                transitionDuration="300"
                onClick={() => dispatch(onActiveTask(item.id))}
            />
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
                : <p style={item.active ? {textDecoration:'line-through'} : {textDecoration:'none'}}>{item.id}) --- {item.descr}</p>}
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