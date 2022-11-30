import type { Option } from '@/types'
import { StylesConfig } from 'react-select'
import Select from 'react-select'

export interface ISingleSelectProps {
  pady?: string
  name: string
  className?: string
  placeholder: string
  defaultValue?: Option
  options: Option[]
  onChange?: (value: Option) => void
}

const customStyles = (pady?: string): StylesConfig => ({
  control: (provided, state) => ({
    ...provided,
    height: '100%',
    padding: `${pady ?? '0.23'}rem 0.5rem`,
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
  dropdownIndicator: (provided, _) => ({
    ...provided,
    color: '#B1B5BB',
    '&:hover': {
      color: '#FFF'
    }
  }),
  placeholder: (provided, _) => ({
    ...provided,
    color: '#FFF8',
  }),
  option: (provided, _) => ({
    ...provided,
    backgroundColor: '#343434',
    color: '#FFF',
    ':hover': {
      backgroundColor: '#222'
    }
  }),
  singleValue: (provided, _) => ({
    ...provided,
    backgroundColor: '#343434',
    color: '#FFF'
  }),
  menu: (provided, _) => ({
    ...provided,
    backgroundColor: '#343434',
  })
})

export const SingleSelect = ({
  pady,
  name,
  options,
  defaultValue,
  className,
  placeholder,
  onChange
}: ISingleSelectProps) => {

  function handleChange(value: any) {
    onChange?.(value)
  }

  return (
    <Select
      isSearchable={false}
      name={name}
      placeholder={placeholder}
      options={options}
      className={className}
      styles={customStyles(pady)}
      defaultValue={defaultValue}
      onChange={handleChange}
    />
  )
}
