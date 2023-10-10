import { Link } from "react-router-dom";

export default function Page404 () {
  return (
    <div className="bg-red-600 text-neutral-100 h-screen p-4 w-full text-center flex flex-col justify-center items-center gap-4">
      <h1 className="text-8xl font-extrabold">404</h1>
      <p className="font-semibold text-xl">WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND</p>
      <Link to='/'>Go Home</Link>
    </div>
  )
}
