import type { Option } from '@/types'
import { useState, KeyboardEventHandler } from 'react'
import CreatableSelect from 'react-select/creatable'
import { StylesConfig } from 'react-select'

export interface IMultipleInputProps {
  name: string
  className?: string
  placeholder: string
  defaultValue?: Option[]
  onValue: (value: any) => void
}

const createOption = (label: string) => ({ label, value: label })
const customStyles: StylesConfig = {
  control: (provided, state) => ({
    ...provided,
    padding: '0.28rem 0.5rem',
    backgroundColor: '#343434',
    border: '2px solid #D1D5DB',
    borderRadius: '0.375rem',
    fontSize: '1.125rem',
    outline: 'none',
    boxShadow: state.isFocused ? '0 0 0 2px #343434, 0 0 0 4px #2563EB' : 'none',
    '&:hover': {
      borderColor: '#D1D5DB'
    }
  }),
  clearIndicator: (provided, _) => ({
    ...provided,
    color: '#B1B5BB',
    '&:hover': {
      color: '#FFF'
    }
  }),
  input: (provided, _) => ({ ...provided, color: 'white' }),
  placeholder: (provided, _) => ({ ...provided, color: '#A3A3A3' }),
  multiValue: (provided, _) => ({
    ...provided,
    backgroundColor: '#252525',
    color: '#FFF'
  }),
  multiValueLabel: (provided, _) => ({
    ...provided,
    color: '#FFF',
    fontWeight: '500'
  })
}

export const MultipleInput = ({
  name,
  className,
  placeholder,
  defaultValue,
  onValue
}: IMultipleInputProps) => {
  const [inputValue, setInputValue] = useState('')
  const [value, setValue] = useState<Option[]>(defaultValue || [])

  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (!inputValue) return
    switch (event.key) {
      case 'Enter':
      case 'Tab':
        setValue((prev) => {
          const newValue = [...prev, createOption(inputValue)]
          onValue(newValue)
          return newValue
        })
        setInputValue('')
        event.preventDefault()
    }
  }

  return (
    <CreatableSelect
      isMulti
      isClearable
      name={name}
      styles={customStyles}
      className={className}
      menuIsOpen={false}
      value={value}
      inputValue={inputValue}
      components={{ DropdownIndicator: null }}
      onKeyDown={handleKeyDown}
      onChange={(value) => {
        setValue(value as Option[])
        onValue(value)
      }}
      onInputChange={(value) => setInputValue(value)}
      placeholder={placeholder}
    />
  )
}
