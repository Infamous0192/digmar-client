interface Element {
  Option: React.FC<React.OptionHTMLAttributes<HTMLOptionElement>>
}

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  children: React.ReactNode
}

const Select: React.FC<Props> & Element = (props) => {
  return (
    <>
      <label htmlFor={props.name} className="block text-sm font-medium text-gray-800 mb-1">
        {props.label}
      </label>
      <select
        {...props}
        id={props.name}
        className={`focus:ring-sunglow-300 focus:border-sunglow-300 block w-full text-sm px-3 leading-none py-2 shadow-sm ${
          props.error ? 'border-red-500' : 'border-gray-300'
        } rounded-md`}
      >
        {props.children}
      </select>
      <p className="text-red-500 text-xs h-1">{props.error || ''}</p>
    </>
  )
}

Select.Option = (props) => <option {...props}>{props.children}</option>
Select.Option.displayName = 'Option'

export default Select
