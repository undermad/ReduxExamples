import {useDispatch, useSelector} from "react-redux";
import {fetchPosts, getPostError, getPostsStatus, selectAllPosts} from "./PostSlice.ts";
import {useEffect} from "react";
import {Status} from "./PostTypes.ts";
import {AppDispatch} from "../../State.ts";
import PostExcerpt from "./PostExcerpt.tsx";

export const PostList = () => {
    const dispatch = useDispatch<AppDispatch>();
    
    const posts = useSelector(selectAllPosts);

    const postsStatus = useSelector(getPostsStatus);
    const postsError = useSelector(getPostError);

    useEffect(() => {
        if (postsStatus === Status.IDLE) {
            dispatch(fetchPosts());
        }
    }, [postsStatus, dispatch]);


    let content;

    if (postsStatus === Status.LOADING) {
        content = <p>Loading...</p>
    } else if (postsStatus === Status.FAILED) {
        content = <p>{postsError}</p>
    } else if (postsStatus === Status.SUCCEEDED) {
        content = posts.posts.map(post => <PostExcerpt key={post.id} post={post}/>)
    }

    return <section>
        {content}
    </section>
}