export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text?: string
  className?: string
  action?: () => void
  Icon?: React.JSXElementConstructor<React.SVGProps<SVGSVGElement>>
}

export const Button = ({
  text,
  Icon,
  action,
  className,
}: IButtonProps) => {
  return (
    <button
      className={`flex items-center gap-2 px-4 py-2.5 w-fit bg-blue-600 hover:bg-blue-500 rounded text-lg font-medium transition-colors ${
        className ?? ''
      }`}
      onClick={action}
    >
      {Icon && <Icon className="w-6 h-6" strokeWidth={2} />}
      {text && <span>{text}</span>}
    </button>
  )
}
