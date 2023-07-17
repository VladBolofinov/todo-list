import './App.scss';
import { MainInput } from "../mainInput/MainInput";
import {Task} from "../task/Task";
import {Empty} from "../empty/Empty";

import {useSelector} from "react-redux";

export const App = () => {
    const {tasks} = useSelector(state => state);
    return (
        <div className="App">
            <MainInput/>
            <Task/>
            {tasks.length ? null : <Empty/>}
        </div>
    );
}