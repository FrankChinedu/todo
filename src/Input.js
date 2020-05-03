import React,{useState} from 'react';

export const Input = (props) => {
    const [state, setState] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        setState(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(state.trim()) {
            props.addTodo(state)
            setState('')
        }
    }

    return (
    <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="input" value={state} onChange={handleChange} />
            <input type="submit" value="add"/>
        </form>
    </>
)}