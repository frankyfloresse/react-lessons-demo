import PostsComponent from "../components/posts/PostsComponent.tsx";
import {useParams} from "react-router-dom";


const PostsPage = () => {
    const { userId } = useParams();

    return (
        <div>
            {
                userId && <PostsComponent userId={userId} />
            }
        </div>
    );
};

export default PostsPage;