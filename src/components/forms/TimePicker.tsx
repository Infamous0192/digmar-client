import Flatpickr from 'react-flatpickr'

interface Props {
  name: string
  label?: string
  error?: string
  onChange: (value: any) => void
}

const Timepicker: React.FC<Props> = (props) => {
  const handleChange = ([date]: Date[]) => {
    props.onChange({ [props.name]: date.getHours() })
  }

  return (
    <>
      <label htmlFor={props.name} className="block text-sm font-medium text-slate-800 mb-1">
        {props.label}
      </label>
      <Flatpickr
        options={{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }}
        onChange={handleChange}
      />
      <p className="text-red-500 text-xs h-1">{props.error || ''}</p>
    </>
  )
}

export default Timepicker
