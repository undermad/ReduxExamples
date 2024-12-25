import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectPostById, updatePosts} from "./PostSlice.ts";
import {useNavigate, useParams} from "react-router-dom";
import {AppDispatch, RootState} from "../../State.ts";
import {Post} from "./PostTypes.ts";

const EditPostForm = () => {

    const { postId } = useParams();
    const post = useSelector((state: RootState) => selectPostById(state, String(postId)));
    
    const navigate = useNavigate();

    
    const [title, setTitle] = useState<string>(String(post?.title));
    const [body, setBody] = useState<string>(String(post?.body));

    const dispatch = useDispatch<AppDispatch>();

    const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const onContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setBody(e.target.value);
    }

    const canSave = () => Boolean(title) && Boolean(body);

    const onSavePostClicked = () => {
        if (!title || !body) {
            return;
        }

        const updatedPost: unknown = {...post, body, title}
        dispatch(updatePosts(updatedPost as Post)).unwrap();
        
        setTitle('');
        setBody('');
         navigate(`/post/${postId}`)
    }

    if (!post) {
        return <p>Post not found.</p>;
    }

    return <section>
        <form>
            <label htmlFor={"postTitle"}>Post Title: </label>
            <input value={title}
                   id={'postTitle'}
                   name={'postTitle'}
                   onChange={onTitleChange}/>

            <label htmlFor={"postContent"}>Content: </label>
            <textarea value={body}
                      id={'postContent'}
                      name={'postContent'}
                      onChange={onContentChange}/>
            <button type='button'
                    disabled={!canSave()}
                    onClick={onSavePostClicked}>Save Post
            </button>
        </form>
    </section>
}

export default EditPostForm;