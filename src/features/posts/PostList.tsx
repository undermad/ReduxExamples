import {useSelector} from "react-redux";
import {selectAllPosts} from "./PostSlice.ts";
import PostAuthors from "./PostAuthors.tsx";
import Time from "./Time.tsx";
import ReactionButtons from "./ReactionButtons.tsx";

export const PostList = () => {
    const posts = useSelector(selectAllPosts);

    const renderPosts = posts.posts.map((post) => {
        return <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <PostAuthors userId={post.userId}/>
            <Time timestamp={post.timestamp}/>
            <ReactionButtons post={post}/>
        </article>
    })

    return <section>
        <h2>Posts</h2>
        {renderPosts}
    </section>
}