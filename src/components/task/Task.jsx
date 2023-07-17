import './Task.scss';
import {onActiveTask,
        onDeleteTask,
        onEditTask,
        onAddEditInputValue,
        onAddEditTask} from "../../actions/actions";

import {useDispatch, useSelector} from 'react-redux';
import { Checkbox, Input, Button } from '@mantine/core';
import { AiOutlineClose } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';

export const Task = () => {
    const dispatch = useDispatch();
    const {editedInputValue,tasks} = useSelector(state => state);

    return (
        tasks.map(item => (
            <div className='task-wrapper' key={item.id}>
                <Checkbox
                    checked={item.active ? `checked` : null}
                    color="green" radius="sm" transitionDuration="300"
                    onClick={() => dispatch(onActiveTask(item.id))}
                />
                <div className="text-wrapper">
                    {item.activeEdit
                        ?   <>
                                <Input placeholder="Edit your task" radius="xl" size="xs" value={editedInputValue} autoFocus={true}
                                       rightSection={
                                           <Button classNames={{ root: 'btn' }}
                                                   styles={{ root: {  height: '20px', marginRight: '30px' }}}
                                                   color="green" radius="xl" size="xs"
                                                   onClick={() => {
                                                       dispatch(onAddEditTask(item.id));
                                                       dispatch(onEditTask(item.id));
                                                   }}>OK
                                           </Button>}
                                       onChange={(e)=>{dispatch(onAddEditInputValue(e.currentTarget.value));}}
                                />
                            </>
                        : <p style={item.active ? {textDecoration:'line-through'} : {textDecoration:'none'}}>---{item.descr}</p>}
                </div>
                <div className="btn-wrapper">
                    <Button color="gray" radius="xl" size="xs" classNames={{ root: 'btn' }}
                            styles={{ root: { marginLeft: '10px', height: '40px' }}}
                            onClick={()=>dispatch(onEditTask(item.id,item.descr))}>
                        <FiEdit2/>
                    </Button>
                    <Button color="red" radius="xl" size="xs" classNames={{ root: 'btn' }}
                            styles={{ root: { marginLeft: '10px', height: '40px' }}}
                            onClick={() => dispatch(onDeleteTask(item.id))}>
                        <AiOutlineClose/>
                    </Button>
                </div>
            </div>
        ))
    );
}