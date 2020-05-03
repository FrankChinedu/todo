import React from 'react';

export const Display = ({todo, handleRemove}) => {
    
    const remove = () => {
        handleRemove(todo.id)
    }

    return (
        <>
            {todo && <p>{todo.name}</p>}
            {todo && <input type="button" value="remove" onClick={remove} />}
        </>
    )
}