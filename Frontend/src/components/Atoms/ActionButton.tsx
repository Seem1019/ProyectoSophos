import { useNavigate } from 'react-router-dom'

type ActionProps = {
  size?: 'small' | 'medium' | 'large'
  intent?: 'primary' | 'warning' | 'danger'
  route?: string
  action?: () => void
  Icon: React.JSXElementConstructor<React.SVGProps<SVGSVGElement>>
}

export const ActionButton = ({
  size = 'small',
  intent = 'primary',
  route,
  action,
  Icon
}: ActionProps) => {
  const navigate = useNavigate()

  function handleClick() {
    if (route) navigate(route)
    if (action) action()
  }

  return (
    <div
      className={`${
        size === 'small' ? 'p-1' : size === 'medium' ? 'p-2' : 'p-3'
      } w-fit rounded ${
        intent === 'primary'
          ? 'hover:bg-blue-500/70'
          : intent === 'warning'
          ? 'hover:bg-orange-500/80'
          : 'hover:bg-red-500/70'
      } cursor-pointer`}
      onClick={handleClick}
    >
      <Icon
        className={
          size === 'small' ? 'w-7' : size === 'medium' ? 'w-9' : 'w-10'
        }
        strokeWidth={1.5}
      />
    </div>
  )
}
