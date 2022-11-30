import type { User } from '@/types'
import { useNavigate } from 'react-router-dom'

import { ActionButton } from '@/components/Atoms'
import { ReactComponent as ViewIcon } from '@/assets/view.svg'
import { ReactComponent as TrashIcon } from '@/assets/trash.svg'
import { ReactComponent as EditIcon } from '@/assets/edit.svg'

export interface ICustomerProps {
  customer: User
  onDelete: (id: string) => void
}

export const CustomerItem = ({ customer, onDelete }: ICustomerProps) => {
  const navigate = useNavigate()

  return (
    <article className="flex flex-col gap-4 py-5 pb-6 px-8 w-fit border-4 border-gray-400 rounded-md">
      <div>
        <h1 className="text-3xl text-center text-blue-400 font-medium">
          {customer.fullName}
        </h1>
        <div className="mt-5 text-lg">
          <p className="text-blue-200">
            <span className="font-medium">Email:</span> {customer.email}
          </p>
          <p className="text-blue-200">
            <span className="font-medium">Address:</span> {customer.address}
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <ActionButton
          Icon={ViewIcon}
          action={() => navigate(`/users/${customer.idUser}`)}
        />
        <ActionButton
          intent="warning"
          Icon={EditIcon}
          action={() => navigate(`/users/edit/${customer.idUser}`)}
        />
        <ActionButton
          intent="danger"
          Icon={TrashIcon}
          action={() => onDelete(customer.idUser)}
        />
      </div>
    </article>
  )
}
