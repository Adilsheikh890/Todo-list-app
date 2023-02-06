"use client";
import React, { use, useState } from 'react'

export default function Todo() {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([

        { todotext: "Todo1", completed: false },
        { todotext: "Todo2", completed: true },
        { todotext: "Todo3", completed: true },
        { todotext: "Todo4", completed: false },
    ]);

    const onclickHandler = (meraElm: any) => {
        console.log("meraElm", meraElm);

        const newTodos = todos.map((todo) => {
            console.log("todo:", todo);
            if (todo.todotext == meraElm.todotext) {
                todo.completed = !todo.completed;
            }
            return todo;
        })
        console.log("newTodos");
        setTodos(newTodos);

    };
    const addtodo = () => {
        const newTodo = { todotext: todo, Comment: false }
        const newTodos = [todos, newTodo]
        setTodos(newTodos);
        setTodo(" "); 
    }

    const deletetodo = (meratodo: any) => {
        const newTodos = todos.filter((todo => {
            if (todo.todotext == meratodo.todotext) return false;
            return true;
        }));
        console.log("old todos", "todos", "new todos", newTodos);
        setTodos(newTodos);
    }






    return (


        <div style={{

            backgroundColor: '#85586F',
            margin: '14px',
            justifyContent: 'center',
            width: '30%',
            height: '26%',
            marginLeft: '350px',
            marginRight: '15px',
            marginTop: '12%',
            textAlign: 'center',
            padding: '60px',
            borderRadius: '10px',
            textAlignLast: 'center',
            //maxWidth: '950px',
            
            


        }}>
            <div style={{
                fontSize: '40px'
            }} >TODO LIST!</div>
            <input placeholder='Add Todo Text ' value={todo} onChange={(e) => { setTodo(e.target.value) }}
                style={{

                    borderRadius: '10px',
                    width: '200px',
                    height: '25px',
                    textDecorationColor: '#65647C',

                }} />

            <button onClick={addtodo} style={{
                borderRadius: '10px',
                backgroundColor: '#D0B8A8',
                margin: "2%",
                width: '20%',
                fontSize: '16px',

            }}>Add</button>
            <ul>
                {todos.map((elm) => {
                    return (
                        <li
                            style={{
                                color: elm.completed ? "#F2921D" : "#F2921D",
                                fontStyle: "oblique",
                                listStyle: "none",
                            }}

                            key={elm.todotext}>
                            <input type="checkbox" checked={elm.completed} onChange={() => { onclickHandler(elm) }}
                                style={{
                                    boxSizing: 'border-box',
                                    display: 'inline-block',
                                    position: 'relative',
                                }} />
                            {elm.todotext}
                            <button onClick={() => { deletetodo(elm) }} style={{
                                borderRadius: '10px',
                                backgroundColor: '#D0B8A8',
                                width: '20%',
                                margin: "2%",

                            }}>
                                Delete</button>
                        </li>



                    );
                }
                )}
            </ul>
        </div>

    )
}
