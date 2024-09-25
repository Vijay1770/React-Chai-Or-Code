import { useEffect, useState } from "react";
import { deletePost, getPost } from "../api/PostApi";
import { Form } from "./Form";



const Posts = () => {
  const [data, setData] = useState([]);

  const getPostData = async () => {
    const res = await getPost();
    console.log(res.data);
    setData(res.data);
  };
  useEffect(() => {
    getPostData();
  }, []);

  //Function TO Delete Post [From UI and API also...]
  const handleDeletePost = async (id) => {
    try {
      const res = await deletePost(id);
      if (res.status === 200) {
        const newUpdatedPosts = data.filter((curPost) => {
          return curPost.id != id;
        });
        setData(newUpdatedPosts);
        
      } else {
        console.log("Failed to delete the post:", res.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Card UI...
  return (
    <>
    <section className="section-form">
      {/*  We gives these two props to form bcz when we add new data by Form is set into the already created data...*/}
      <Form data={data} setData={setData}/> 
    </section>
    <section className="section-post">
      <ol>
        {data.map((curElem) => {
          const { id, body, title } = curElem;
          return (
            <li key={id}>
              <p>{title}</p>
              <p>{body}</p>
              <button>Edit</button>
              <button
                className="btn-delete"
                onClick={() => handleDeletePost(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ol>
    </section>
    </>
  );
};
export default Posts;
