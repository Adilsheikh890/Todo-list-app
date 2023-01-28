"use client";
import React, { use, useState } from 'react'

export default function Todo() {
    const [todo, settodo] = useState('')
    const [todos, settodos] = useState([

        {todotext: "todo1", completed : false},
        {todotext: "todo2", completed : true},
        {todotext: "todo3", completed : true},
        {todotext: "todo4", completed : false},
    ]);

        const onclickHandler = (meraElm: any) =>{
            console.log("meraElm",meraElm);
        
        const newtodo = todos.map((todo)=>{
            console.log("todo:", todo);
            if(todo.todotext == meraElm.todotext){
                todo.completed =! todo.completed;
            }
            return todo;
        })  
        console.log("newtodos");  
        settodos(newtodo);

        };
        const addtodo = ()=>{
            const newtodo = {todotext: todo, Comment : false}
            const newtodos = [...todos, newtodo]
            settodos(newtodos);
            settodo("");
        } 

        const deletetodo = (meratodo: any)=>{
         const newtodos = todos.filter(todo=>{
            if(todo.todotext == meratodo.todotext) return false;
            return true;
         });
         console.log("old todos", "todos", "new todos", newtodos );
         settodos(newtodos);
        } 
       
       
        
        
       
    
    return (

        
        <div style={{
            
           backgroundColor: '#85586F',
           backgroundImage: '',
            margin: '14px',
            justifyContent:'center',
            width:'30%',
            height: '250%',
            marginLeft: '26%',
            marginRight: '15%',
            marginTop: '12%',
            textAlign: 'center',
            padding: '20px',
            borderRadius: '10px',
            
        }}>
            <div style={{
                fontSize: '40px',
                

            }} >TODO LIST!</div>
            <input placeholder='Add Todo Text ' value={todo} onChange={(e)=>{settodo(e.target.value)}}
             style={{

                borderRadius: '10px',
                width: '200px',
                height: '20px',

             }}/>

            <button onClick={addtodo} style ={{ 
                borderRadius: '10px' ,
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
                        color: elm.completed ? "#42032C" : "#42032C",
                        fontStyle: "oblique",
                        listStyle: "none",
                    }}

                    key={elm.todotext}>
                        <input type="checkbox" checked={elm.completed} onChange={()=>{onclickHandler(elm)}}
                        style={{
                            boxSizing: 'border-box',
                            display: 'inline-block',
                            position: 'relative',
                        }}/>
                    {elm.todotext}
                    <button onClick={()=>{deletetodo(elm)}} style={{
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
