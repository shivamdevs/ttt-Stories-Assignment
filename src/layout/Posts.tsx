import useStories from '../context/useStories';
import PostBody from '../components/PostBody';

function Posts() {
    const { posts } = useStories();
    return (
        <article id="posts" className="mt-5">
            <header className="border-b border-b-gray-300">
                <span className="border border-gray-300 border-l-white border-b-white -ml-[1px] first-of-type:ml-0 inline-block px-5 py-2 text-[#5DABE9] font-bold -mb-[1px]">{posts.length} Posts</span>
            </header>
            {posts.map((post) => <PostBody key={post.post_id} post={post} />)}
        </article>
    )
}

export default Posts;