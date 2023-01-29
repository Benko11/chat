import { Link, Outlet } from 'react-router-dom';
import { ChatHeader } from '../components/ChatHeader';
import { MessageBubble } from '../components/MessageBubble';
import { Navigation } from '../components/Navigation/Navigation';

export function ChatLayout() {
    return (
        <div className="flex h-screen box-border dark">
            <Navigation />

            <div className="relative flex flex-1 flex-col bg-slate-50 text-slate-900 dark:bg-slate-800 dark:text-slate-50 ">
                <ChatHeader nickname="benko11" avatar="x.png" />

                <div className="p-4 overflow-y-scroll h-[80vh] flex-1 flex">
                    <div className="self-end flex flex-col w-full">
                        <MessageBubble time="11:17 AM">
                            Hello! Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Similique reiciendis, nesciunt rem
                            quae at enim? Ducimus vel quaerat tempore esse,
                            ipsum natus maxime totam quisquam sapiente incidunt
                            voluptates, libero non?
                        </MessageBubble>
                        <MessageBubble time="11:17 AM" self>
                            Hi
                        </MessageBubble>
                        <MessageBubble time="11:19 AM">🏳️‍🌈</MessageBubble>
                        <MessageBubble time="11:20 AM" self>
                            🏳️‍🌈
                        </MessageBubble>
                        <MessageBubble time="1:08 PM">
                            How can long can we keep this up? <br />
                            lol
                        </MessageBubble>
                        <MessageBubble time="1:09 PM">
                            I mean, I would like really like it if we could make
                            a chat long enough so that it scrolls
                        </MessageBubble>

                        <MessageBubble time="1:09 PM">
                            Whatcha think?
                        </MessageBubble>

                        <MessageBubble time="1:10 PM" self>
                            Whatever
                        </MessageBubble>

                        <MessageBubble time="1:11 PM">
                            That wasn't very enthusiastic ☹️
                        </MessageBubble>

                        <MessageBubble time="1:11 PM" self>
                            Hahahaha, it doesn't work 😜
                        </MessageBubble>
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
