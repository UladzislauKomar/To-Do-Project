import React, { useState } from "react";
import ToDo from "../models/ToDo";
import "../styles/create.scss";
import { Guid } from "guid-typescript";

function Create(props: any){
    const handleOnSubmit = (event: any) => {
        event.preventDefault();
        if(title && description){
            const item = new ToDo(Guid.create().toString(), title, description);
            props.onSubmit(item);
        }
    }

    const handleOnTitleChange = (event: any) => {
        setTitle(event.target.value);
    }

    const handleOnDescriptionChange = (event: any) => {
        setDescription(event.target.value);
    }

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return(
        <form className="create-form" onSubmit={handleOnSubmit}>
            <div className="create-form__header">
                <h4>Create To-Do</h4>
            </div>
            <input placeholder="Title" className="create-form__input" onChange={handleOnTitleChange}></input>
            <input placeholder="Description" className="create-form__input" onChange={handleOnDescriptionChange}></input>
            <button className="create-form__button" type="submit">submit</button>
        </form>
    )
}

export default Create;