import type { Option } from '@/types'
import { normalizeKey } from '@/utils'
import { MultipleInput } from './MultiSelect'
import { SingleSelect } from './SingleSelect'

export interface IInputGroupProps {
  name: string
  type: string
  placeholder: string
  defaultValue: any
  options: Option[]
  onValueChange: (value: any) => void
}

export const InputGroup = ({
  name,
  type,
  options,
  placeholder,
  defaultValue,
  onValueChange
}: IInputGroupProps) => {
  return (
    <div className={`flex flex-col gap-2 ${type === 'hidden' && 'hidden'}`}>
      <label htmlFor={name} className="text-xl">
        {normalizeKey(name)}
      </label>
      {type === 'multi-select' ? (
        <MultipleInput
          name={name}
          onValue={onValueChange}
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
      ) : type === 'select' ? (
        <SingleSelect
          pady="0.43"
          name={name}
          placeholder={placeholder}
          options={options}
          defaultValue={defaultValue}
        />
      ) : (
        <input
          name={name}
          type={type}
          className="px-4 py-2.5 bg-dark border-2 border-gray-300 rounded-md text-lg placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-dark focus:transition-shadow"
          placeholder={placeholder}
          defaultValue={defaultValue}
          required
        />
      )}
    </div>
  )
}
