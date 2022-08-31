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
    const [loading, isLoading] = useState(false)
    useEffect(() => {
        isLoading(true)
        fetch('https://cryptic-stream-86241.herokuapp.com/createBlog')
            .then(res => res.json())
            .then(data => {
                setNewBlogs(data);
                isLoading(false)

            })
    }, []);

    return [newBlogs, setNewBlogs, loading, isLoading];
}


export default UseNewBlog;