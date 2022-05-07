interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const TextField: React.FC<Props> = (props) => {
  return (
    <>
      <label htmlFor={props.name} className="block text-sm font-medium text-gray-800 mb-1">
        {props.label}
      </label>
      <input
        {...props}
        id={props.name}
        className={`focus:ring-sunglow-300 focus:border-sunglow-300 block w-full text-sm pl-3 pr-12 leading-none py-2 shadow-sm ${
          props.error ? 'border-red-500' : 'border-gray-300'
        } rounded-md`}
      />
      <p className="text-red-500 text-xs m-0 p-0 h-1">{props.error || ''}</p>
    </>
  )
}

export default TextField
