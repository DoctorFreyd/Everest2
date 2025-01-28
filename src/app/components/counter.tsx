'use client';

import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, setValue } from '../../store/counterSlice'; // ensure no duplicate imports
import { RootState } from '../../store/store';

export default function Counter() {
    const dispatch = useDispatch();
    const counter = useSelector((state: RootState) => state.counter.value);

    return (
        <div className='p-4'>
            <h1 className='my-3 mx-3'><b>Counter</b>: {counter}</h1>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-3' onClick={() => dispatch(increment())}>Increment</button>
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={() => dispatch(decrement())}>Decrement</button>
            <button className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mx-3' onClick={() => dispatch(setValue(10))}>Set to 10</button>
        </div>
    );
}
