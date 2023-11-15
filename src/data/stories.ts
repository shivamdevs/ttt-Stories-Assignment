import uuid from "../util/uuid";

const storyMetadata = {
    userid: uuid(),

    username: "anujgosalia",
    fullname: "Anuj Gosalia",

    profile: "/images/profile-picture.png",
    banner: "/images/profile-banner.png",

    isPremium: true,
    isVerified: true,

    followers_count: 6482,
    following_count: 245,

    biography: "Co-founder & CEO at Terribly Tiny Tales",
    profile_links: [
        "https://www.instagram.com/anujgosalia",
    ],
    profile_metadata: {
        stars: 125,
        upvotes: 12,
        views: 57823,
        likes: 26012
    },

    posts: [
        {
            post_id: uuid(),
        }
    ],
};

export default storyMetadata;