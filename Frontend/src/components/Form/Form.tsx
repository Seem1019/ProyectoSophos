import type { InputFields, Option } from '@/types'
import { useRef, useEffect } from 'react'
import { Button } from '@/components/Button'
import { InputGroup } from './Input'

export interface IFormProps {
  className?: string
  buttonLabel: string
  fields: InputFields[]
  values?: Record<string, any>
  onSubmit: (data: any) => void
}

export const Form = ({ fields, values, buttonLabel, onSubmit }: IFormProps) => {
  const multiValue = useRef<string[]>([])

  useEffect(() => {
    if (values) {
      fields.forEach((field) => {
        if (field.type === 'multi-select') {
          const value = values[field.name]
          multiValue.current = value.split(',').map((item: string) => item)
        }
      })
    }
  }, [fields, values])

  const getRealValue = ([key, value]: [string, any]) => {
    const isSelect =
      fields.find((field) => field.type === 'multi-select')?.name === key
    const isNumberic =
      fields.find((field) => field.name === key)?.type === 'number' &&
      !isNaN(value)

    return [
      key,
      isSelect
        ? multiValue.current.join(',')
        : isNumberic
        ? Number(value)
        : value
    ]
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(
      Array.from(formData.entries())
        .map(getRealValue)
        .filter(([_, value]) => value !== null)
    )
    onSubmit(data)
  }

  function onMultiSelect(value: Option[]) {
    const normalized = value.map((item: Option) => item.value)
    multiValue.current = normalized
  }

  function defaultValue(index: number) {
    const field = fields[index]
    const key = field.name
    if (!values || !values[key]) return ''

    if (field.type === 'select')
      return field.options?.find((option) => option.value === values[key])

    if (field.type === 'multi-select')
      return values[key]
        .split(',')
        .map((item: string) => ({ label: item, value: item }))

    if (field.type === 'date') return values[key]
    return values[key]
  }

  return (
    <form className="flex flex-col items-center gap-10" onSubmit={handleSubmit}>
      <div className="grid xs:grid-cols-2 gap-4 gap-y-5 w-full">
        {fields.map((field, index) => (
          <InputGroup
            key={`form-field-${field.name}`}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            onValueChange={onMultiSelect}
            options={field.options as Option[]}
            defaultValue={defaultValue(index)}
          />
        ))}
      </div>
      <Button
        // @ts-ignore
        type="submit"
        text={buttonLabel}
        className="justify-center w-1/3"
      />
    </form>
  )
}
