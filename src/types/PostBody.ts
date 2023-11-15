import PostContent from "./PostContent";

interface PostBody {
    post_id: string;
    category: string;
    title: string;
    meta: string;
    content: PostContent[],
    upvotes: number;
    views: number;
    postDate: number;
    read_time: string;
}

export default PostBody;