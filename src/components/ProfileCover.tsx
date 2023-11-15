import { Check, Eye, Gem, Heart, Star, ThumbsUp } from 'lucide-react';
import Icon from './Icon';
import Follows from './Follows';
import useStories from '../context/useStories';

function ProfileCover() {
    const { profile, banner, fullname, isPremium, isVerified, followers_count, following_count, biography, profile_links, profile_metadata } = useStories();
    return (
        <>
            <div className="">
                <img src={banner} width={1024} height={256} className="w-full h-40 object-cover" alt={`Profile banner of ${fullname}`} />
            </div>
            <div className="-mt-10 p-6 space-y-5">
                <div className="flex gap-5 items-end flex-wrap">
                    <div className="w-28 aspect-square border-2 border-gray-800 rounded-full overflow-hidden">
                        <img src={profile} className="w-full h-full object-cover" alt={`Profile picture of ${fullname}`} />
                    </div>
                    <div className="space-y-2">
                        <div className="flex flex-nowrap gap-2 items-center">
                            <span className="text-lg font-bold">{fullname}</span>
                            {isPremium && <Icon element={Gem} bg="#462D80" />}
                            {isVerified && <Icon element={Check} bg="#5ce69b" color="black" />}
                        </div>
                        <div className="flex flex-nowrap gap-4">
                            <Follows text="Followers" count={followers_count} />
                            <Follows text="Following" count={following_count} />
                        </div>
                    </div>
                    <div className="hidden flex-wrap gap-5 self-center ml-auto md:inline-flex">
                        <Icon bg="#5FBBCA" element={Star} count={profile_metadata.stars} />
                        <Icon bg="#FFC23E" element={ThumbsUp} count={profile_metadata.upvotes} />
                        <Icon bg="#818181" element={Eye} count={profile_metadata.views} />
                        <Icon bg="#C9265B" element={Heart} count={profile_metadata.likes} />
                    </div>
                </div>
                <div>
                    <div className="text-gray-500">{biography}</div>
                    <div className="text-sm">
                        {profile_links.map((link) => <a key={new URL(link).hostname} href={link} target="_blank" rel="noopener noreferrer">{link}</a>)}
                    </div>
                    <div className="inline-flex flex-wrap gap-5 mt-5 md:hidden">
                        <Icon bg="#5FBBCA" element={Star} count={profile_metadata.stars} />
                        <Icon bg="#FFC23E" element={ThumbsUp} count={profile_metadata.upvotes} />
                        <Icon bg="#818181" element={Eye} count={profile_metadata.views} />
                        <Icon bg="#C9265B" element={Heart} count={profile_metadata.likes} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileCover;

