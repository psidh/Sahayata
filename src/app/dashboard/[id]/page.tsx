

export default function UserPage({params} : any) {

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <h1>Profile Page</h1>
      <p className='text-2xl my-6'>{params.id}</p>
    </div>
  )
}
