
type CreatePostPropsType = {
    checkForUserLoggedIn: () => void
}

export const CreatePost = ({ checkForUserLoggedIn }: CreatePostPropsType) => {
    return (
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
    )
}
