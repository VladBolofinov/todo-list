import './App.scss';
import { MainInput } from "../mainInput/MainInput";
import {Task} from "../task/Task";

//поставить айдишники уникальные значения

export const App = () => {

    return (
        <div className="App">
            <MainInput/>
            <Task/>
        </div>
    );
}