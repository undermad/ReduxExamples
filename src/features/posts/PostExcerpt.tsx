import {Post} from "./PostTypes.ts";
import PostAuthors from "./PostAuthors.tsx";
import Time from "./Time.tsx";
import ReactionButtons from "./ReactionButtons.tsx";

type PostExcerptProps = {
    post: Post;
}

const PostExcerpt = ({post}: PostExcerptProps) => {
    return <article>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <PostAuthors userId={post.userId}/>
        <Time timestamp={post.timestamp}/>
        <ReactionButtons post={post}/>
    </article>

}

export default PostExcerpt;