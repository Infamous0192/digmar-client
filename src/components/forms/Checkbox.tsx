interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode
}

const Checkbox: React.FC<Props> = ({ children, ...props }) => {
  return (
    <div className="flex items-center">
      <input
        {...props}
        id={props.name}
        type="checkbox"
        className="h-4 w-4 text-sunglow-600 focus:ring-0 border-slate-300 rounded"
      />
      <label htmlFor={props.name} className="pl-3 block text-sm text-slate-700 capitalize">
        {children}
      </label>
    </div>
  )
}

export default Checkbox
