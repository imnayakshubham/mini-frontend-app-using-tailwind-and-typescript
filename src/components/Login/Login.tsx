
import { Link } from 'react-router-dom'
import EyeIcon from "../../assets/EyeIcon.svg"

type LoginPagePropsTypes = {
    from?: "auth_modal" | "own_page",
    setShowPage?: React.Dispatch<React.SetStateAction<"login" | "signup">>;
}

export const Login = ({ from = "own_page", setShowPage }: LoginPagePropsTypes) => {
    return (
        <section className={`flex ${from === "own_page" ? " items-center justify-center h-screen" : ""} `}>
            <div className='auth__border rounded-lg'>
                <div className="bg-[#27292D] rounded-lg p-8 w-[463px] border-none">
                    <h2 className="text-[#6B6C70] text-center text-sm">WELCOME BACK</h2>
                    <h1 className="text-white text-center text-xl font-semibold mb-6">Log into your account</h1>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="mb-4">
                            <label className="block text-[#C5C7CA] text-sm mb-2" htmlFor="email-username">
                                Email or Username
                            </label>
                            <input
                                className="w-full p-3 text-sm bg-gray-700 text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                id="email-username"
                                type="text"
                                placeholder="Enter your email or username"
                            />
                        </div>
                        <div className="mb-6">
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-[#C5C7CA] text-sm" htmlFor="password">
                                    Password
                                </label>
                                <Link to="/" className="text-[#C5C7CA] text-sm">Forgot password?</Link>
                            </div>
                            <div className="relative">
                                <input
                                    className="w-full p-3 text-sm bg-gray-700 text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                            Login now
                        </button>
                    </form>
                    <p className="mt-2 text-[#7F8084] text-sm">
                        Not registered yet? {from === "auth_modal" ? <span className="text-[#C5C7CA] cursor-pointer" onClick={() => setShowPage && setShowPage("signup")}>Register &rarr;</span> : <Link to="/signup" className="text-[#C5C7CA]">Register &rarr;</Link>}
                    </p>
                </div>
            </div>
        </section>
    )
}
