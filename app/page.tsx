import Link from "next/link";

export default function HomePage() {
    return (
        <div className='flex flex-col text-center font-mono font-extrabold text-gray-600'>
            <h1 className='p-10 text-2xl'> Welcome to Your Note My Friend :) </h1>
            <div className='group'>
                <Link
                    className='p-2 w-auto underline transition text-xl rounded-xl hover:bg-fuchsia-400 hover:text-gray-50'
                    href='./add-note'> Go To Your List </Link>
                <span hidden className='pl-3 text-xl group-hover:inline'>😉</span>
            </div>
        </div>
    );
}
