import { ReactNode } from 'react';

type MessageBubbleProps = {
    self?: boolean;
    children: ReactNode;
    time: string;
};

export function MessageBubble({ self, children, time }: MessageBubbleProps) {
    const classes = self
        ? 'bg-cyan-700 text-slate-50'
        : 'bg-white dark:bg-slate-900 dark:text-slate-50';
    return (
        <div
            className={`flex flex-col gap-1 my-2 group ${
                self ? 'ml-auto' : ''
            }`}
        >
            <div
                className={`${classes} shadow-lg px-4 py-2 rounded-2xl ${
                    self ? 'rounded-br-none' : 'rounded-bl-none'
                } w-max max-w-sm`}
            >
                {children}
            </div>
            <div className="text-slate-300 dark:text-slate-600 text-xs px-2 invisible group-hover:visible">
                {time}
            </div>
        </div>
    );
}
