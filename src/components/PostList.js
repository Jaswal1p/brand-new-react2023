import { useState, useEffect } from 'react';

export const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(res => res.json())
          .then(data => setPosts(data))
          .catch(err => console.log(err))

            
        }, []);

        return (
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                    
                ))}

                
            </ul>    
        )

    
};