interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode
}

const Checkbox: React.FC<Props> = ({ children, ...props }) => {
  return (
    <>
      <input
        {...props}
        id={props.name}
        type="checkbox"
        className="h-4 w-4 text-sunglow-600 focus:ring-0 border-gray-300 rounded"
      />
      <label htmlFor={props.name} className="pl-3 block text-sm text-gray-700 capitalize">
        {children}
      </label>
    </>
  )
}

export default Checkbox
