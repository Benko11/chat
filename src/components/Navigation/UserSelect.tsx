import { Link } from 'react-router-dom';

type UserSelectProps = {
    nickname: string;
    avatar: string;
    active?: boolean;
};

export function UserSelect({ nickname, avatar, active }: UserSelectProps) {
    const classes = active ? 'bg-slate-300 dark:bg-slate-800' : '';
    return (
        <Link to="#">
            <div
                className={`flex gap-3 rounded-2xl ${classes} hover:bg-slate-300 p-4  dark:hover:bg-slate-800`}
            >
                <div
                    className="w-8 h-8 rounded-full bg-cover"
                    style={{
                        backgroundImage: `url('./assets/${avatar}')`,
                    }}
                ></div>
                <div className="self-center">
                    <div className="font-bold self-center">{nickname}</div>
                </div>
            </div>
        </Link>
    );
}
