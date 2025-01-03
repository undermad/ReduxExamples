import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {postAdded} from "./PostSlice.ts";
import {selectAllUsers} from "../users/UsersSlice.ts";

const AddPostForm = () => {

    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');
    const [userId, setUserId] = useState<string>('');

    const users = useSelector(selectAllUsers);

    const dispatch = useDispatch();

    const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const onContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setBody(e.target.value);
    }

    const onAuthorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setUserId(e.target.value);
    }

    const canSave = () => Boolean(title) && Boolean(body) && Boolean(userId);

    const onSavePostClicked = () => {
        if (!title || !body) {
            return;
        }

        const timestamp = new Date().getTime();
        const reactions =  [{like: 0, name: 'likes'}, {like: 0, name: 'coffee'}]
        
        
        dispatch(postAdded({title, body, userId, timestamp, reactions}));
        setTitle('');
        setBody('');
    }

    const userOptions = users.users.map(user => {
        return <option key={user.id} value={user.id}>
            {user.name}
        </option>
    })


    return <section>
        <form>
            <label htmlFor={"postTitle"}>Post Title: </label>
            <input value={title}
                   id={'postTitle'}
                   name={'postTitle'}
                   onChange={onTitleChange}/>

            <label htmlFor={"postAuthor"}>Author: </label>
            <select onChange={onAuthorChange}>
                <option value={''}></option>
                {userOptions}
            </select>

            <label htmlFor={"postContent"}>Content: </label>
            <textarea value={body}
                      id={'postContent'}
                      name={'postContent'}
                      onChange={onContentChange}/>
            <button type='button'
                    disabled={!canSave()}
                    onClick={onSavePostClicked}>Save Post</button>
        </form>
    </section>
}

export default AddPostForm;