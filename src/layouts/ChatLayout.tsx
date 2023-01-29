import { Outlet } from 'react-router-dom';

export function ChatLayout() {
    return (
        <div className="grid grid-cols-[auto,1fr] h-screen box-border dark">
            <div className="hidden md:block">
                <div className="flex flex-col h-screen">
                    <div className="flex flex-col flex-1 overflow-y-auto w-80 bg-slate-100 text-slate-900 dark:bg-slate-700 dark:text-slate-100">
                        <div className="p-4 flex flex-col gap-4">
                            <a href="#">
                                <div className="flex gap-3 rounded-2xl bg-slate-300 hover:bg-slate-300 p-4 dark:bg-slate-800 dark:hover:bg-slate-800">
                                    <div
                                        className="w-8 h-8 rounded-full bg-cover"
                                        style={{
                                            backgroundImage: `url('./assets/x.png')`,
                                        }}
                                    ></div>
                                    <div className="self-center">
                                        <div className="font-bold self-center">
                                            benko11
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a href="#">
                                <div className="flex gap-3 rounded-2xl hover:bg-slate-300 p-4 dark:hover:bg-slate-800">
                                    <div
                                        className="w-8 h-8 rounded-full bg-cover"
                                        style={{
                                            backgroundImage: `url('./assets/reddit.jpg')`,
                                        }}
                                    ></div>
                                    <div className="self-center">
                                        <div className="font-bold self-center">
                                            xylinroom
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="#">
                                <div className="flex gap-3 rounded-2xl hover:bg-slate-300 p-4 dark:hover:bg-slate-800">
                                    <div
                                        className="w-8 h-8 rounded-full bg-cover"
                                        style={{
                                            backgroundImage: `url('../assets/unnamed.jpg')`,
                                        }}
                                    ></div>
                                    <div className="self-center">
                                        <div className="font-bold self-center">
                                            no. 1
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="#">
                                <div className="flex gap-3 rounded-2xl hover:bg-slate-300 p-4 dark:hover:bg-slate-800">
                                    <div
                                        className="w-8 h-8 rounded-full bg-cover"
                                        style={{
                                            backgroundImage: `url('./assets/bill-new.jpg')`,
                                        }}
                                    ></div>
                                    <div className="self-center">
                                        <div className="font-bold self-center">
                                            dorian
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-700 p-4">
                        <button className="bg-cyan-700 hover:bg-cyan-800 focus:bg-cyan-800 w-full rounded-xl py-4 text-white font-bold hover:-translate-y-1 transition-all shadow-lg">
                            Log out
                        </button>
                    </div>
                </div>
            </div>

            <div className="relative flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-800 dark:text-slate-50">
                <div className="p-4 font-bold flex bg-slate-300 dark:bg-slate-900 ">
                    <a href="#">
                        <div className="flex gap-2 items-center">
                            <div
                                className="w-10 h-10 rounded-full bg-cover"
                                style={{
                                    backgroundImage: `url("./assets/x.png")`,
                                }}
                            ></div>
                            <div className="text-lg">benko11</div>
                        </div>
                    </a>
                </div>

                <div className="p-4 overflow-y-auto h-[80vh] flex-1 flex">
                    <div className="self-end flex flex-col w-full">
                        <div className="flex flex-col gap-2 group">
                            <div className="bg-white dark:bg-slate-900 dark:text-slate-50 shadow-lg px-4 py-2 rounded-2xl rounded-bl-none w-max max-w-sm">
                                Hello there! Lorem ipsum, dolor sit amet
                                consectetur adipisicing elit. Odit enim commodi
                                ab provident aliquam impedit assumenda
                                recusandae, neque ipsum rerum numquam
                                exercitationem ipsam illo aliquid velit
                                praesentium consequatur. Porro, laboriosam!
                            </div>
                            <div className="text-slate-300 dark:text-slate-600 text-sm px-2 invisible group-hover:visible">
                                11:17 AM
                            </div>
                        </div>

                        <div className="ml-auto text-right group">
                            <div className="bg-cyan-700 text-slate-50 px-4 py-2 rounded-2xl rounded-br-none inline-block shadow-lg mb-2">
                                Hi
                            </div>
                            <div className="text-slate-300 dark:text-slate-600 text-sm px-2 invisible group-hover:visible">
                                11:17 AM
                            </div>
                        </div>

                        <div className="group">
                            <div className="bg-white dark:bg-slate-900 dark:text-slate-50 shadow-lg px-4 py-2 rounded-2xl rounded-bl-none w-max max-w-sm mb-2">
                                🏳️‍🌈
                            </div>
                            <div className="text-slate-300 dark:text-slate-600 text-sm px-2 invisible group-hover:visible">
                                11:18 AM
                            </div>
                        </div>

                        <div className="ml-auto text-right group">
                            <div className="bg-cyan-700 text-slate-50 px-4 py-2 rounded-2xl rounded-br-none inline-block shadow-lg mb-2">
                                🏳️‍🌈
                            </div>
                            <div className="text-slate-300 dark:text-slate-600 text-sm px-2 invisible group-hover:visible">
                                11:20 AM
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full p-3">
                    <form className="flex">
                        <input
                            type="text"
                            className="w-full p-2 px-4 rounded-tl-xl rounded-bl-xl outline-none shadow-md bg-white dark:bg-slate-700 dark:text-slate-50"
                            placeholder="Send a message..."
                        />
                        <button className="bg-cyan-800 text-slate-50 px-4 hover:bg-cyan-900 focus:bg-cyan-900 rounded-br-xl rounded-tr-xl outline-none">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
