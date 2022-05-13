import { Link } from 'components/elements'

interface Props {
  to: string
  active: boolean
  title: string
  icon: React.FC<any>
}

export const SidebarLink: React.FC<Props> = (props) => {
  return (
    <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${props.active && 'bg-sunglow-50'}`}>
      <Link
        to={props.to}
        className="block text-slate-900 hover:text-sunglow-800 truncate transition duration-150"
      >
        <div className="flex items-center">
          <props.icon
            className={`shrink-0 h-6 w-6 ${props.active ? 'text-sunglow-500' : 'text-slate-700'}`}
          />
          <span className="text-sm font-medium ml-3 duration-200">
            {props.title}
          </span>
        </div>
      </Link>
    </li>
  )
}
