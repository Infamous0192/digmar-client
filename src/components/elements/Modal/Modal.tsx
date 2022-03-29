import { useEffect, useRef } from 'react'
import { Transition } from '../Transition'

type Props = {
  children: JSX.Element
  label: string
  show: boolean
  onClose: Function
}

const Modal: React.FC<Props> = ({ children, label, show, onClose }) => {
  const modalContent = useRef<HTMLDivElement>(null)

  // close the modal on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!show || modalContent.current!.contains(target as any)) return
      onClose()
    }

    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the modal if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ code }: KeyboardEvent) => {
      if (code !== 'Escape') return
      onClose()
    }

    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <>
      {/* Modal backdrop */}
      <Transition
        className="fixed inset-0 z-50 bg-white bg-opacity-75 transition-opacity backdrop-blur-sm"
        show={show}
        enter="transition ease-out duration-200"
        enterStart="opacity-0"
        enterEnd="opacity-100"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        aria-hidden="true"
      />

      {/* Modal dialog */}
      <Transition
        id={label}
        className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center transform px-4 sm:px-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby={label}
        show={show}
        enter="transition ease-out duration-200"
        enterStart="opacity-0 scale-95"
        enterEnd="opacity-100 scale-100"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100 scale-100"
        leaveEnd="opacity-0 scale-95"
      >
        <div className="bg-white overflow-auto max-w-6xl w-full max-h-full" ref={modalContent}>
          {children}
        </div>
      </Transition>
    </>
  )
}

export default Modal
