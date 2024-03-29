

export default function Sign_Up() {
    return (
        <>
            <div class="bg-grey-lighter min-h-screen flex flex-col">
                <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center px-2">
                    <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                        <input
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            
                            placeholder="Full Name" />

                        <input
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            
                            placeholder="Email" />

                        <input
                            type="password"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            
                            placeholder="Password" />
                        <input
                            type="password"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            
                            placeholder="Confirm Password" />

                        <button
                            type="submit"
                            class="w-full text-center py-3 rounded bg-black text-white hover:bg-green-dark focus:outline-none my-1"
                        >Create Account</button>

                        <div class="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the
                            <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Terms of Service
                            </a> and
                            <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Privacy Policy
                            </a>
                        </div>
                    </div>

                    <div class="text-grey-dark mt-6">
                        Already have an account?
                        <a class="no-underline border-b border-blue text-blue" href="/user">
                            Log in
                        </a>.
                    </div>
                </div>
            </div>
        </>
    ) 
}