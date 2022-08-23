import { useEffect, useState } from "react";

const UseNewBlog = () => {
    const [newBlogs, setNewBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/createBlog')
            .then(res => res.json())
            .then(data => {
                setNewBlogs(data);
            })
    }, []);

    return [newBlogs, setNewBlogs];
}


export default UseNewBlog;