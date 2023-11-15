import { ThumbsUp } from 'lucide-react';
import PostBody from '../types/PostBody';
import Icon from './Icon';
import useStories from '../context/useStories';
import parseDate from '../util/parseDate';
import parseCount from '../util/parseCount';
import { Link } from 'react-router-dom';

export interface PostBodyProps {
    post: PostBody;
}

function PostBody({ post }: PostBodyProps) {

    const { username } = useStories();

    return (
        <Link to={`/posts/${post.post_id}`} className="hover:no-underline text-black p-5 border-b border-b-gray-200 last-of-type:border-b-0 space-y-10 block hover:bg-[#5FBBCA22] transition-all" id={post.post_id}>
            <header className="flex gap-5 flex-row-reverse items-start">
                <Icon element={ThumbsUp} bg="#FFC23E" />
                <h2 className="flex-1 text-xl font-bold">{post.title}</h2>
            </header>
            <div className="line-clamp-3 text-gray-600 font-medium">{post.meta}</div>
            <footer className="flex flex-wrap gap-3 text-sm">
                <div className="font-bold text-gray-600 mr-auto">
                    <span className="text-[#5FBBCA]">{post.category}</span> by {username}
                </div>
                <div className="flex flex-wrap gap-1 text-gray-400">
                    <span className="">{parseDate(post.postDate)}</span> • <span className="">{post.read_time} Read</span> • <span className="">{parseCount(post.views)} Views</span>
                </div>
            </footer>
        </Link>
    )
}

export default PostBody;