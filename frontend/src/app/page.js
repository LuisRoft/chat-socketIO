// "use client";
// import Chat from './chat'


export default function Home() {
  return (
    <main className="grid place-content-center min-h-screen w-full">
      <div className='bg-yellow-400 p-20 rounded-3xl gap-2 flex flex-col'>
        <label for="success" className="block mb-2 text-sm font-medium text-green-700">Your name</label>
        <input type="text" id="success" className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 " placeholder="Success input" />
        <button type="button" className="text-white bg-[#FF5F5D] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Join to chat</button>
      </div>
    </main>
  )
}
