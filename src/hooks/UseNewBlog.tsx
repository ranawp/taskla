import { useEffect, useState } from "react";

interface BlogType {
    _id: string
    blogTitle: string
    blogDescription: string
    img: string
    currentDate: string
    blogUser: string
}

const UseNewBlog = () => {
    const [newBlogs, setNewBlogs] = useState<BlogType[]>([]);
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