interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const TextField: React.FC<Props> = (props) => {
  return (
    <>
      <label htmlFor={props.name} className="block text-sm font-medium text-slate-800 mb-1">
        {props.label}
      </label>
      <input
        {...props}
        id={props.name}
        className={`focus:ring-primary-100 focus:border-primary-300 block w-full text-sm px-2 py-1 shadow-sm ${
          props.error ? 'border-red-500' : 'border-slate-300'
        } rounded`}
      />
      <p className="text-red-500 text-xs h-1">{props.error || ''}</p>
    </>
  )
}
