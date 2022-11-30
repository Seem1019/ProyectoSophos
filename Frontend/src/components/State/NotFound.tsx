import { Link } from 'react-router-dom'

export const NotFoundView = () => {
  return (
    <section className="mt-36 w-fit text-center">
      <h1 className="text-8xl font-medium">404</h1>
      <div className="mt-5">
        <p className="text-center text-lg">That page doesn't exist</p>
        <Link to="/" className="text-lg font-medium">Go to Home</Link>
      </div>
    </section>
  )
}
