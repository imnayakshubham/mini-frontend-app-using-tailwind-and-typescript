import User1 from "../../assets/User1.svg"
import User2 from "../../assets/User2.svg"

import MoreOptionIcon from "../../assets/MoreOptionIcon.svg"
import ChatBubble from "../../assets/ChatBubble.svg"
import { useState } from "react"
import { AuthModal } from "../AuthModal/AuthModal"

const postData = [
    {
        "id": 1,
        "profilePic": User1,
        "profileName": "Theresa Webb",
        "timeAgo": "5mins ago",
        "isEdited": false,
        "moreOptionsIcon": MoreOptionIcon,
        "message": {
            "emoji": "👋",
            "text": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        "comments": {
            "icon": ChatBubble,
            "count": "24 comments"
        }
    },
    {
        "id": 2,
        "profilePic": User2,
        "profileName": "Marvin McKinney",
        "timeAgo": "8mins ago",
        "isEdited": true,
        "moreOptionsIcon": MoreOptionIcon,
        "message": {
            "emoji": "😞",
            "text": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        "comments": {
            "icon": ChatBubble,
            "count": "2 comments"
        }
    }
]

export const Posts = () => {

    const userInfo = false

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);

    const checkForUserLoggedIn = () => {
        if (!userInfo) {
            openModal()
        }
    }

    return (
        <section className="h-screen flex flex-col max-w-2xl m-4 md:mx-auto mt-12">
            <div className="flex gap-3 flex-col">
                <div>
                    <div className="font-inter text-2xl font-medium leading-[33.89px] text-left text-[#C5C7CA]">
                        Hello Jane
                    </div>
                    <div className='font-inter text-base font-normal leading-6 text-left text-[#7F8084] w-full md:w-[580px]'>
                        How are you doing today? Would you like to share something with the community 🤗
                    </div>
                </div>
                <div className='border-2 border-customGray bg-[#27292D] p-6 flex flex-col gap-3 rounded-lg' onClick={() => checkForUserLoggedIn()}>
                    <h3 className='py-2 font-medium text-[#C5C7CA] text-xl'>Create post</h3>
                    <div className='bg-[#191920] p-3 flex rounded gap-4 items-center'>
                        <div className="flex items-center justify-center w-12 h-12 p-4 text-2xl rounded-full bg-[#27292D] border-transparent font-bold">
                            <div className="text-xl">
                                💬
                            </div>
                        </div>
                        <input placeholder='How are you feeling today?' className='bg-transparent outline-none w-full' />
                    </div>
                    <div className='flex justify-end'>
                        <button className='bg-[#4A96FF] font-inter text-base font-medium leading-5 text-left px-8 py-3 rounded'>Post</button>
                    </div>
                </div>

                <div className="flex gap-3 flex-col">
                    {
                        postData.map((post) => {
                            return <div key={post.id} className="list_item cursor-pointer p-6 flex flex-col gap-4 rounded-lg border-2 border-customGray bg-[#27292D]" onClick={() => checkForUserLoggedIn()}>
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
                        })
                    }
                </div>
            </div>

            <AuthModal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </section >
    )
}
