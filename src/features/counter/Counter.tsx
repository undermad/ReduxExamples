import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../State.ts";
import {increment, decrement, reset, updateChangeValue} from "./ConterSlice.ts";

export const Counter = () => {

    const state = useSelector((state: RootState) => state.counter);
    const dispatch = useDispatch();
    
    
    const handelInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        dispatch(updateChangeValue(value));
    }

    return <>
        <h3>{state.value}</h3>
        <input type={"number"}
               value={state.changeValue}
               onChange={handelInputChange}/>
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>+</button>
        </div>
        <div>
            <button onClick={() => dispatch(reset())}>RESET</button>
        </div>

    </>
}