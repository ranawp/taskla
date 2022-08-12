import { useEffect, useState } from "react";

const UseNewBlog = () => {
    const [newBlogs, setNewBlogs] = useState([]);
    useEffect(() => {
        fetch('https://cryptic-stream-86241.herokuapp.com/createBlog')
            .then(res => res.json())
            .then(data => {
                setNewBlogs(data);
            })
    }, []);

    return [newBlogs]
}


export default UseNewBlog;