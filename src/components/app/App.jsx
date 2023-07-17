import './App.scss';
import {useDispatch, useSelector} from 'react-redux';
import {onAddInputValue,
        onAddTask,
        onActiveTask,
        onDeleteTask,
        onEditTask,
        onAddEditInputValue,
        onAddEditTask} from "../../actions";

import { Checkbox, Input, Button } from '@mantine/core';
import { BsPencil } from 'react-icons/bs';
import { HiOutlinePlus } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';

//поставить айдишники уникальные значения
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
            <Button color="red"
                    radius="xl"
                    size="xs"
                    onClick={() => dispatch(onDeleteTask(item.id))}>
                <AiOutlineClose/>
            </Button>
            <Button color="gray"
                    radius="xl"
                    size="xs"
                    onClick={()=>dispatch(onEditTask(item.id,item.descr))}>
                <FiEdit2/>
            </Button>
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
            <Input
                icon={<BsPencil/>}
                placeholder="Add your task"
                radius="xl"
                size="lg"
                onChange={(e)=>dispatch(onAddInputValue(e.currentTarget.value))}
                value={inputValue}
                rightSection={
                <Button color="green"
                        radius="xl"
                        size="xs"
                        onClick={()=>dispatch(onAddTask({id:tasks.length + 1, descr:`${inputValue}`, active:false}))}>
                    <HiOutlinePlus/>
                </Button>}
            />
            {tasksRender}
        </div>
    );
}