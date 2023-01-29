import { Link } from 'react-router-dom';

type ChatHeaderProps = {
    nickname: string;
    avatar: string;
};

export function ChatHeader({ nickname, avatar }: ChatHeaderProps) {
    return (
        <div className="p-4 font-bold flex bg-slate-300 dark:bg-slate-900 ">
            <Link to="#">
                <div className="flex gap-2 items-center">
                    <div
                        className="w-10 h-10 rounded-full bg-cover"
                        style={{
                            backgroundImage: `url("./assets/${avatar}")`,
                        }}
                    ></div>
                    <div className="text-lg">{nickname}</div>
                </div>
            </Link>
        </div>
    );
}
