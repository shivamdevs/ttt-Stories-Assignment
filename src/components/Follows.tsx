
export interface FollowProps {
    text: string;
    count: number;
}

function Follows({ text, count }: FollowProps) {
    return (
        <div className="flex flex-col items-center">
            <span className="inline-block px-3 border-2 border-gray-500 rounded text-lg text-gray-500">{count}</span>
            <span className="text-gray-400 text-sm">{text}</span>
        </div>
    );
}

export default Follows;