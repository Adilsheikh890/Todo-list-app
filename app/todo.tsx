"use client";
import React, { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { todoText: "Todo 1", completed: false },
    { todoText: "Todo 2", completed: true },
    { todoText: "Todo 3", completed: true },
    { todoText: "Todo 4", completed: false },
  ]);

  const onClickHandler = (meraElm: any) => {
    console.log("meraElm", meraElm);

    // map runs on array, and returns an array
    const newTodos = todos.map((todo) => {
      console.log("todo: ", todo);
      if (todo.todoText == meraElm.todoText) {
        todo.completed = !todo.completed; // false he to true krdo, true he to false kardo
      }
      return todo;
    });

    console.log(newTodos);
    setTodos(newTodos);
  };
  const addTodo = () => {
    const newTodo = { todoText: todo, completed: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodo("");
  };

  const deleteTodo = (meraTodo: any) => {
    const newTodos = todos.filter((todo) => {
      if (todo.todoText == meraTodo.todoText) return false;
      return true;
    });
    console.log("old todos", todos, "new todos", newTodos);
    setTodos(newTodos);
  };
  return (
    <>
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
    }}>
      <div style={{
         fontSize: '40px'
      }}>TODO LIST!</div>

      {/* input  */}
      <input
        placeholder="Add Todo Text"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        style={{
            borderRadius: '10px',
            width: '200px',
            height: '25px',
            textDecorationColor: '#65647C',
            borderBlockColor: 'ActiveBorder'
        }}
      />
      <button onClick={addTodo}
      style={{
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
                color: elm.completed ? "#F9F54B" : "#F9F54B",
                fontStyle: "oblique",
                listStyle: "none",
                textSizeAdjust: 'bold',
              }}
              key={elm.todoText}
            >
              <input
                type="checkbox"
                checked={elm.completed}
                onChange={() => {
                  onClickHandler(elm);
                }}
                style={{
                    boxSizing: 'border-box',
                    display: 'inline-block',
                    position: 'relative',
                }}
              />
              {elm.todoText}
              <button
                onClick={() => {
                  deleteTodo(elm);
                }}
                style={{
                    borderRadius: '10px',
                    backgroundColor: '#D0B8A8',
                    width: '20%',
                    margin: "2%",
                }}
              >
                {"  "}
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      </div>
    </>
  );
}
