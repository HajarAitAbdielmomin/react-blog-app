import {useHistory, useParams} from "react-router-dom";
import useFetch from "../services/useFetch";
import deleteBlog from "../services/deleteBlog";

const BlogDetails = () => {
    const { id } = useParams();
    const {data : blog,error,isPending} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    const handleClick = () => {
        deleteBlog(blog.id, history)
    }
    return (
      <div className="blog-details">
          {error && <div>{ error }</div>}
          {isPending ? (
              <div>Loading...</div>
          ) : (
              blog &&
                  <article className="article">
                      <h2>{ blog.title }</h2>

                      <p>Written by {blog.author}</p>

                      <div>{ blog.body }</div>

                      <button onClick={handleClick}>delete</button>
                  </article>
              )}
      </div>
    );
}
export default BlogDetails;