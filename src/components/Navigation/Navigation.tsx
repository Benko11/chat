import { Link } from 'react-router-dom';
import { UserSelect } from './UserSelect';

export function Navigation() {
    return (
        <div className="hidden md:block">
            <div className="flex flex-col h-screen">
                <div className="flex flex-col flex-1 overflow-y-auto w-80 bg-slate-100 text-slate-900 dark:bg-slate-700 dark:text-slate-100">
                    <div className="p-4 flex flex-col gap-4">
                        <UserSelect nickname="benko11" avatar="x.png" active />
                        <UserSelect nickname="dorian" avatar="bill-new.jpg" />
                        <UserSelect nickname="no. 1" avatar="unnamed.jpg" />
                        <UserSelect
                            nickname="mr. bergstrom"
                            avatar="vlcsnap-error730.png"
                        />
                        <UserSelect
                            nickname="spongebob squarepants"
                            avatar="spongebob.jpg"
                        />
                        <UserSelect nickname="666rigbys" avatar="rigby.jpg" />
                    </div>
                </div>
                <div className="bg-slate-100 dark:bg-slate-700 p-4">
                    <button className="bg-cyan-700 hover:bg-cyan-800 focus:bg-cyan-800 w-full rounded-xl py-4 text-white font-bold hover:-translate-y-1 transition-all shadow-lg">
                        Log out
                    </button>
                </div>
            </div>
        </div>
    );
}
