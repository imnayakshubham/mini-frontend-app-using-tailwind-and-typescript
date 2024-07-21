import { Link } from "react-router-dom"
import EyeIcon from "../../assets/EyeIcon.svg"


type SignupPagePropsTypes = {
    from?: "auth_modal" | "own_page",
    setShowPage?: React.Dispatch<React.SetStateAction<"login" | "signup">>
}

export const Signup = ({ from = "own_page", setShowPage }: SignupPagePropsTypes) => {

    return (
        <section className={`flex ${from === "own_page" ? " items-center justify-center h-screen" : ""} `}>
            <div className='auth__border rounded-lg'>
                <div className="bg-[#27292D] rounded-lg p-8 w-[463px] border-none">
                    <h2 className="text-[#6B6C70] text-center text-sm uppercase">Sign up</h2>
                    <h1 className="text-white text-center text-xl font-semibold mb-6">Create an account to continue</h1>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="mb-4">
                            <label className="block text-[#C5C7CA] text-sm mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="w-full p-3 text-sm bg-gray-700 text-gray-200 rounded focus:outline-none focus:ring-2"
                                id="email"
                                type="text"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-[#C5C7CA] text-sm mb-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                className="w-full p-3 text-sm bg-gray-700 text-gray-200 rounded focus:outline-none focus:ring-2"
                                id="username"
                                type="text"
                                placeholder="Choose a preferred username"
                            />
                        </div>
                        <div className="mb-6">
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-[#C5C7CA] text-sm" htmlFor="password">
                                    Password
                                </label>
                            </div>
                            <div className="relative">
                                <input
                                    className="w-full p-3 text-sm bg-gray-700 text-gray-200 rounded focus:outline-none focus:ring-2"
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <img src={EyeIcon} alt='hide/ Unhide Password' />
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-[#4A96FF] text-white rounded hover:bg-blue-600 transition duration-200"
                        >
                            Signup now
                        </button>
                    </form>
                    <p className="mt-2 text-[#7F8084] text-sm">
                        Already have an account? {from === "auth_modal" ? <span className="text-[#C5C7CA] cursor-pointer" onClick={() => setShowPage && setShowPage("login")}>Login &rarr;</span> : <Link to="/login" className="text-[#C5C7CA]">Login &rarr;</Link>}
                    </p>
                </div>
            </div>
        </section>
    )
}