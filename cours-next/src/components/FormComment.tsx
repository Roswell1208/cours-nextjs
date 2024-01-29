"use client";

import React, { useState } from "react";

const createComment = (comment: {title: string, body: string, userId: number}) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: comment.title,
        body: comment.body,
        userId: comment.userId,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

const FormComment = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createComment({title, body, userId: 1});
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Titre :
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label>
                Contenu :
                <input type="text" value={body} onChange={(e) => setBody(e.target.value)} />
            </label>
            <input type="submit" value="Envoyer" />
        </form>
    );
};

export default FormComment;