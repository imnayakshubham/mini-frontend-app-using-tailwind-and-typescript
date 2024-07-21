import MoreOptionIcon from "../../../assets/MoreOptionIcon.svg"
import ChatBubble from "../../../assets/ChatBubble.svg"

type PostPropsType = {
    post: {
        id: number;
        profilePic: string;
        profileName: string;
        timeAgo: string;
        isEdited: boolean;
        message: { emoji: string; text: string; };
        comments: { count: string; };
    },
    checkForUserLoggedIn: () => void
}

export const Post = ({ post, checkForUserLoggedIn }: PostPropsType) => {
    return (
        <div key={post.id} className="list_item cursor-pointer p-6 flex flex-col gap-4 rounded-lg border-2 border-customGray bg-[#27292D]" onClick={() => checkForUserLoggedIn()}>
            <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                    <div>
                        <img src={post.profilePic} alt="profile pic of Theresa Webb" />
                    </div>
                    <div>
                        <div className="font-inter text-base font-medium leading-[19.36px] text-left">
                            {post.profileName}
                        </div>
                        <div className="font-inter text-sm font-medium leading-5 text-left text-[#7F8084]" >
                            {post.timeAgo} {post.isEdited ? `• Edited` : null}
                        </div>
                    </div>
                </div>
                <div>
                    <img src={MoreOptionIcon} alt="Options for More Icon" className="font-bold" />
                </div>
            </div>

            <div className="flex gap-4 p-4 bg-[#191920] rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 p-4 rounded-full bg-[#27292D] border-transparent font-bold">
                    <div className="text-md">
                        {post.message.emoji}
                    </div>
                </div>
                <div className="text-[#7F8084] font-inter text-base font-normal leading-6 text-left">
                    {post.message.text}
                </div>
            </div>

            <div>
                <button className="flex gap-2 items-center text-[#7F8084]">
                    <img src={ChatBubble} alt="Comment Icon" className="font-bold" /> <span className="font-inter text-sm font-medium leading-4 text-left">24 comments</span>
                </button>
            </div>
        </div>
    )
}
