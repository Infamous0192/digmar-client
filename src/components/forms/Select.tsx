interface Element {
  Option: React.FC<React.OptionHTMLAttributes<HTMLOptionElement>>
}

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
}

const Select: React.FC<Props> & Element = (props) => {
  return (
    <>
      <label htmlFor={props.name} className="block text-sm font-medium text-slate-800 mb-1">
        {props.label}
      </label>
      <select
        {...props}
        id={props.name}
        className={`focus:ring-indigo-100 focus:border-indigo-300 block w-full px-2 py-1 text-sm shadow-sm ${
          props.error ? 'border-red-500' : 'border-slate-300'
        } rounded`}
      >
        {props.children}
      </select>
      <p className="text-red-500 text-xs h-1">{props.error || ''}</p>
    </>
  )
}

Select.Option = (props) => <option {...props}>{props.children}</option>

export default Select
