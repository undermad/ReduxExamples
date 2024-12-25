import {useSelector} from "react-redux";
import {selectAllUsers} from "../users/UsersSlice.ts";

type PostAuthorsProps = {
    userId: number;
}

const PostAuthors = ({userId}: PostAuthorsProps) => {
    const users = useSelector(selectAllUsers);
    const author = users.users.find(user => user.id === userId);
    return (<p>{author ? author.name : 'Unknown'}</p>)
}

export default PostAuthors;