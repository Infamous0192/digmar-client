type Props = {
  /**
   * Sidebar toggle status
   */
  isOpen: boolean
}

/**
 * Backdrop that appears on mobile version only
 */
export const SidebarBackdrop: React.FC<Props> = ({ isOpen }) => {
  return (
    <div
      className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-hidden="true"
    ></div>
  )
}
