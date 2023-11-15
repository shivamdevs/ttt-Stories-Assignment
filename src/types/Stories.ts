import PostBody from "./PostBody";

interface StoryType {
    userid: string;
    username: string;
    fullname: string;
    profile: string;
    banner: string;
    isPremium: boolean;
    isVerified: boolean;
    followers_count: number;
    following_count: number;
    biography: string;
    profile_links: string[];
    profile_metadata: {
        stars: number;
        upvotes: number;
        views: number;
        likes: number;
    };
    posts: PostBody[];
}

export default StoryType;