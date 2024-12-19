import {useDispatch} from "react-redux";
import {Post} from "./PostTypes.ts";
import {reactionAdded} from "./PostSlice.ts";

type ReactionButtonsProps = {
    post: Post;
}

const reactionButtonsList = {
    likes: '👍',
    coffee: '☕️'
}

const ReactionButtons = ({post}: ReactionButtonsProps) => {

    const dispatch = useDispatch();

    const reactionButtons = Object.entries(reactionButtonsList).map(([name, emoji]) => {
        
        return <button key={name}
                       type={"button"}
                       onClick={() => {
                           dispatch(reactionAdded({postId: post.id, reactionName: name}))
                       }}>
            {emoji} {post.reactions.find(reaction => reaction.name === name)?.like}
        </button>

    })


    return <div>
        {reactionButtons}
    </div>
}

export default ReactionButtons;