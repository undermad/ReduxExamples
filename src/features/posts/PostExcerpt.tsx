import {Post} from "./PostTypes.ts";
import PostAuthors from "./PostAuthors.tsx";
import Time from "./Time.tsx";
import ReactionButtons from "./ReactionButtons.tsx";
import {Link} from "react-router-dom";

type PostExcerptProps = {
    post: Post;
}

const PostExcerpt = ({post}: PostExcerptProps) => {
    return <article>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <PostAuthors userId={Number(post.userId)}/>
        <Time timestamp={post.timestamp}/>
        <ReactionButtons post={post}/>
        <Link to={`post/${post.id}`}>View Post</Link>
        <Link to={`post/${post.id}/edit`}>Edit Post</Link>
    </article>

}

export default PostExcerpt;