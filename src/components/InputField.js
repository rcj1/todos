import React from 'react';

const InputField = ({onContentChange, onDateChange, onAddTask}) => {
  return (
    <>
      <p className='center general-text'>Enter todo and deadline: (Time defaults to end of selected day)</p>
      <div className='center w-100-l w-90'>
        <input className='f4 mr1' type='text' onChange={onContentChange}/>
        <input className='f4 ml1' type='date' onChange={onDateChange}/>
        <button className='w-5 ml3 grow bg-light-blue'
          onClick={onAddTask}>
          Add Task</button>
      </div>
    </>
  );
};

export default InputField;