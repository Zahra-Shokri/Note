import localFont from "next/font/local";

const vazirFont = localFont({
    src: '../../public/fonts/Vazirmatn-Regular.woff2'
})

export default function AddNote() {

    return (
        <div>
            <form className='flex flex-col mt-10 mx-auto p-14 max-w-xl rounded-md border border-gray-400'>
                <textarea
                    className={`p-2 border rounded border-gray-400 bg-gray-200 ${vazirFont.className}`}></textarea>

                <button type='submit' className='mt-10 p-1 rounded-2xl border-2 border-gray-400'> Add Note</button>
            </form>
        </div>
    )
}