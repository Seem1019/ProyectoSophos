import { Link } from 'react-router-dom'

export interface IErrorProps {
  message: string
}

export const ErrorView = ({ message }: IErrorProps) => {
  return (
    <section className="flex flex-col justify-center items-center gap-4">
      <h1 className="text-5xl">Error</h1>
      <p className="text-2xl">{message}</p>
      <Link to="/" className="text-xl text-red-500">
        Go back to home
      </Link>
    </section>
  )
}
