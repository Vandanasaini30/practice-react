import React,{useState} from "react";
import './AddUser.css';

const AddUser = (props) => {
    const [enteredUserName,setEnteredName]=useState('');
    const [enteredAgeName,setEnteredAge]=useState('');
    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUserName.trim().length===0||enteredAgeName.trim().length===0){
            return;
        }
        if(+enteredAgeName<1){
            return;
        }
        props.onAddUser(enteredUserName,enteredAgeName); 
        setEnteredName('');
        setEnteredAge('');
    }
    const userNameChangeHandler=(event)=>{
        setEnteredName(event.target.value);
    }
    const userAgeChangeHandler=(event)=>{
        setEnteredAge(event.target.value);
    }


    return (
        <div>
            <form className="input" onSubmit={addUserHandler}>
                <label className="input label" htmlFor="username">UserName</label>
                <input className="input input" id="username" value={enteredUserName} onChange={userNameChangeHandler} type="text" />
                <label className="input label" htmlFor="age">Age(Years)</label>
                <input className="input input" id="age" value={enteredAgeName} onChange={userAgeChangeHandler} type='number' />
                <button className="button" type="submit">Add User</button>
            </form>
            
        </div>
    );
}

export default AddUser;
