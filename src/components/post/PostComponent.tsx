import {FC} from "react";
import {IPost} from "../../models/IPost.ts";

interface IProps {
    post: IPost;
}

const PostComponent: FC<IProps> = ({ post }) => {
    return (
        <div>
            {post.title}
        </div>
    );
};

export default PostComponent;