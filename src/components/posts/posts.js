import React, { useState, useEffect } from "react";
import Post from "../post";

const Posts = (props) => {

    const [posts, setPosts] = useState([])

    const getAllPosts = async () => {

        let collection = []
        const response = await fetch('http://localhost:3030/jsonstore/messenger')
        const data = await response.json()
        
        if (props.author) {
            
            Object.entries(data).forEach(([key, value]) => {
                if (value.author === props.author) {
                    console.log(value.author);
                    collection.push(<Post content={value.content} author={value.author} />)
                }
            })
        }else{
            Object.entries(data).forEach(([key, value]) => {
                collection.push(<Post content={value.content} author={value.author} />)
            })
        }
        setPosts(collection)
        
    }

    useEffect(() => {
        getAllPosts()
    }, [props.flag])

    return (
        <div>
            {posts}
        </div>
    )
}

export default Posts