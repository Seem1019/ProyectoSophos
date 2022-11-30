import type { User } from '@/types'
import { Link } from 'react-router-dom'

export interface IMostFrequentUsersProps {
  users: User[]
}

export const MostFrequentUsers = ({
  users
}: IMostFrequentUsersProps) => {
  return (
    <article className="flex flex-col gap-4">
      <h1 className="text-blue-400 text-3xl">Most Frequent Users</h1>
      <ul className="flex flex-col gap-5 max-h-[60vh] overflow-y-auto">
        {users.map((user) => (
          <li key={user.IdUser}>
            <Link
              to={`/users/${user.IdUser}`}
              className="flex gap-2 px-3 py-3 hover:bg-blue-600/40"
            >
              <div className="flex flex-col gap-1 text-xl">
                <p className="flex gap-2 text-2xl">{user.FullName}</p>
                <p className="flex gap-2 text-lg font-light">
                  <span>{user.Email}</span>
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  )
}
