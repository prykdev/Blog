import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  console.log(post);
  const PF = "http://localhost:5000/images/"
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((C) => {
            <span className="postCat">{C.name}</span>;
          })}
          <Link to={`/post/${post._id}`} className="Link">
            <span className="postTitle"> {post.title}</span> 
          </Link>
        </div>
        <hr className="line" />

        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
