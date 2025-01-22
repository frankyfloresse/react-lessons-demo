import {FC, useEffect, useState} from "react";
import {userService} from "../../services/api.service.ts";
import {IPost} from "../../models/IPost.ts";
import PostComponent from "../post/PostComponent.tsx";

interface IProps {
    userId: string;
}

const PostsComponent: FC<IProps> = ({ userId }) => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await userService.getUserPosts(Number(userId));
            setPosts(data);
        }

        fetchData();
    }, [userId]);

    return (
        <div>
            {
                posts.map(post => <PostComponent key={post.id} post={post} />)
            }
        </div>
    );
};

export default PostsComponent;