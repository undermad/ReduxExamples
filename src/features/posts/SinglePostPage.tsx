import {useSelector} from "react-redux";
import {selectPostById} from "./PostSlice.ts";
import {RootState} from "../../State.ts";
import {useParams} from "react-router-dom";
import SinglePostView from "./SinglePostView.tsx";



const SinglePostPage = () => {
    
    const { postId } = useParams();
    console.log(postId);
    const post = useSelector((state: RootState) => selectPostById(state, String(postId)));
    console.log(post);
    
    if (!post) {
        return <section>
            <h2>Post not found.</h2>
        </section>
    }
    
    return <>
        <SinglePostView post={post}/>
    </>
}

export default SinglePostPage;