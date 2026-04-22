import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Data from '../Data'

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate()

  // find specific post
  const post = Data.find((item) => item.id === parseInt(id));

  if (!post) {
    return <h2>Post not found</h2>;
  }
  function handleClick(){
    console.log("clicked")
    navigate(-1)
  }

  return (
    <>
    <button onClick={handleClick}>Back</button>
    <div className="details">
      <h1>{post.title}</h1>
      <img src={post.img_url} alt={post.title} style={{ width: "400px" }} />
      <p>{post.description}</p>
    </div>
    </>
  )
}

export default Details