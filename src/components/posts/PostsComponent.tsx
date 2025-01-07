import {FC, useEffect, useState} from "react";
import {IPost} from "../../models/IPost.ts";
import {postService} from "../../services/api.service.ts";
import PostComponent from "../post/PostComponent.tsx";

interface IProps {
    userId: string;
}

const PostsComponent: FC<IProps> = ({ userId }) => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const posts = await postService.getPost(+userId);
            setPosts(posts);
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