import {onAddInputValue, onAddTask} from "../../actions/actions";

import {Button, Input} from "@mantine/core";
import {useDispatch, useSelector} from 'react-redux';
import {HiOutlinePlus} from 'react-icons/hi';
import {BsPencil} from "react-icons/bs";
import uniqid from 'uniqid';

export const MainInput = () => {
    const dispatch = useDispatch();
    const {inputValue} = useSelector(state => state);
    return (
        <div className='main-input'>
            <Input
                icon={<BsPencil/>}
                placeholder="Add your task"
                radius="xl"
                size="lg"
                onChange={(e)=>dispatch(onAddInputValue(e.currentTarget.value))}
                value={inputValue}
                rightSection={
                    <Button classNames={{ root: 'btn' }}
                            styles={{ root: { marginRight: '10px', height: '40px' }}}
                            color="green"
                            radius="xl"
                            size="xs"
                            onClick={()=>dispatch(onAddTask({id:uniqid(), descr:`${inputValue}`, active:false}))}>
                        <HiOutlinePlus/>
                    </Button>}
            />
        </div>
    )
}