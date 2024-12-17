import {useSelector} from "react-redux";
import {selectAllPosts} from "./PostSlice.ts";

export const PostList = () => {
    const posts = useSelector(selectAllPosts);

    const renderPosts = posts.posts.map((post) => {
        return <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </article>
    })

    return <section>
        <h2>Posts</h2>
        {renderPosts}
    </section>
}