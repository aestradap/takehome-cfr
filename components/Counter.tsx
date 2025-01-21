'use client';

import {useSelector} from 'react-redux';
import {useAppDispatch} from '../app/redux/store';
import {RootState} from '../app/redux/store';
import {increment, decrement, incrementByAmount} from '../app/redux/slices/exampleSlice';

export default function Counter() {
    // const count = useSelector((state: RootState) => state.example.value);
    // const dispatch = useAppDispatch();

    return <div>
        <h1>Counter: {}</h1>
        {/*<button onClick={() => dispatch(increment())}>Increment</button>*/}
        {/*<button onClick={() => dispatch(decrement())}>Decrement</button>*/}
        {/*<button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>*/}
    </div>;
};
