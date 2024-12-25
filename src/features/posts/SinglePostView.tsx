import {Post} from "./PostTypes.ts";
import PostAuthors from "./PostAuthors.tsx";
import Time from "./Time.tsx";
import ReactionButtons from "./ReactionButtons.tsx";

type SiglePostViewProps = {
    post: Post;
}

const SinglePostView = ({post}: SiglePostViewProps) => {
    return <article>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <PostAuthors userId={Number(post.userId)}/>
        <Time timestamp={post.timestamp}/>
        <ReactionButtons post={post}/>
    </article>

}

export default SinglePostView;