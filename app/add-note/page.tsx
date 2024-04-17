import localFont from "next/font/local";
import {revalidateTag} from "next/cache";

const BASE_URL = 'http://localhost:8000/notes'

interface noteListProps {
    id: number
    text: string
}

const vazirFont = localFont({
    src: '../../public/fonts/Vazirmatn-Regular.woff2'
})

export default async function AddNote() {
    const response = await fetch(BASE_URL, {
        cache: "no-cache",
        next: {
            tags: ['notes']
        }
    })
    const data: noteListProps[] = await response.json()
    const id = Object.keys(data).length

    async function addNote(e: FormData) {
        'use server'
        const textNote = e.get('textNote')
        const newData = {id, text: textNote}

        await fetch(BASE_URL, {
            method: 'POST',
            body: JSON.stringify(newData),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        revalidateTag('notes')
    }

    return (
        <div>
            <form action={addNote}
                  className='flex flex-col mt-10 mx-auto p-14 max-w-xl rounded-md border-2 border-orange-400 bg-orange-300'>
                <textarea name='textNote' placeholder='your note...'
                          className={`p-2 border rounded border-gray-400 bg-white ${vazirFont.className}`}></textarea>

                <button type='submit' className='mt-7 p-2 rounded-2xl text-white bg-indigo-800'> Add Note</button>
            </form>

            <div className='my-16'>
                {data.map((item: noteListProps) => (
                    <div
                        className='flex mt-5 p-5 mx-auto max-w-xl items-center rounded-md border-2 bg-indigo-200 border-indigo-400'>
                        <p className='mr-3 bg-indigo-200'>{`${item.id}. `}</p>
                        <p className='bg-indigo-200'>{item.text}</p>
                        <div className='bg-indigo-200'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth="2"
                                 stroke="red" className="w-6 h-6 p-1 bg-indigo-200 rounded-2xl hover:bg-red-300">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}