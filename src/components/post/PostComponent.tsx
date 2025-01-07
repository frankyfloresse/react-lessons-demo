import {FC} from "react";
import {IPost} from "../../models/IPost.ts";

interface IProps {
    post: IPost
}

const PostComponent: FC<IProps> = ({ post }) => {
    return (
        <div>
            <div>{post.title}</div>
            <div>{post.body}</div>
        </div>
    );
};

export default PostComponent;