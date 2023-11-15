import useStories from '../context/useStories';
import { Link, Navigate, useParams } from 'react-router-dom';
import parseDate from '../util/parseDate';
import parseCount from '../util/parseCount';
import PostContent from '../types/PostContent';

function PostContent() {

    const { posts, username } = useStories();
    const params = useParams();

    const post = posts.find(post => post.post_id === params.post_id);


    if (!post) return (<Navigate replace to="/posts/404" />);

    return (
        <div className="my-5">
            <nav className="text-sm text-gray-500 border-t border-t-gray-200 block p-5">
                <Link to="/">Home</Link> / {post.title}
            </nav>
            <div className="p-5">
                <h2 className="text-2xl font-bold text-gray-600">{post.title}</h2>
                <div className="flex flex-wrap gap-3 text-sm">
                    <div className="font-bold text-gray-600 mr-auto">
                        <span className="text-[#5FBBCA]">{post.category}</span> by {username}
                    </div>
                    <div className="flex flex-wrap gap-1 text-gray-400">
                        <span className="">{parseDate(post.postDate, true)}</span> • <span className="">{post.read_time} Read</span> • <span className="">{parseCount(post.views)} Views</span>
                    </div>
                </div>
                <blockquote className="border-l-4 border-l-[#5FBBCA] p-5 my-5 text-gray-600 text-sm bg-[#5FBBCA22] rounded-r-lg">{post.meta}</blockquote>
                <section className="">
                    {post.content.map((item, index) => <BlogBody key={index} body={item} />)}
                </section>
            </div>
        </div>
    )
}

export default PostContent;


function BlogBody({ body }: { body: PostContent }) {

    if (typeof body !== "string" && body.type === "h1") return <h1 className="my-10 text-2xl font-bold">{body.text}</h1>;
    if (typeof body !== "string" && body.type === "h2") return <h2 className="mt-7 text-xl font-bold">{body.text}</h2>;
    if (typeof body !== "string" && body.type === "h3") return <h3 className="mt-5 text-xl font-bold">{body.text}</h3>;
    if (typeof body !== "string" && body.type === "h4") return <h4 className="mt-5 text-lg font-semibold">{body.text}</h4>;
    if (typeof body !== "string" && body.type === "h5") return <h5 className="mt-5 text-lg font-semibold">{body.text}</h5>;
    if (typeof body !== "string" && body.type === "h6") return <h6 className="mt-5 text-base font-medium">{body.text}</h6>;

    return <p className="mt-5">{typeof body !== "string" ? body.text : body}</p>;
}