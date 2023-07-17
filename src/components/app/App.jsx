import './App.scss';
import { MainInput } from "../mainInput/MainInput";
import {Task} from "../task/Task";
import {Empty} from "../empty/Empty";
import {onAddTask,
        onAddInputValue,
        onActiveTask,
        onDeleteTask,
        onEditTask,
        onAddEditInputValue,
        onAddEditTask} from "../../actions/actions";
import {useSelector} from "react-redux";

export const App = () => {
    const {tasks,inputValue,editedInputValue} = useSelector(state => state);
    return (
        <div className="App">
            <MainInput inputValue={inputValue}
                       onAddInputValue={onAddInputValue}
                       onAddTask={onAddTask}/>
            <Task editedInputValue={editedInputValue}
                  tasks={tasks}
                  onActiveTask={onActiveTask}
                  onDeleteTask={onDeleteTask}
                  onEditTask={onEditTask}
                  onAddEditInputValue={onAddEditInputValue}
                  onAddEditTask={onAddEditTask}/>
            {tasks.length ? null : <Empty/>}
        </div>
    );
}