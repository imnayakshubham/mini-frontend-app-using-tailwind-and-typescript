
import { useState } from "react"
import { AuthModal } from "../AuthModal/AuthModal"
import { Post } from "./Post/Post"
import { CreatePost } from "./CreatePost/CreatePost"
import { postData } from "../../constants"


export const Posts = () => {
    const userInfo = null // This variable will be dynamically set based on state management in the actual application.

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
                <CreatePost checkForUserLoggedIn={checkForUserLoggedIn} />

                <div className="flex gap-3 flex-col">
                    {
                        postData.map((post) => {
                            return <Post post={post} key={post.id} checkForUserLoggedIn={checkForUserLoggedIn} />
                        })
                    }
                </div>
            </div>

            <AuthModal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </section>
    )
}
