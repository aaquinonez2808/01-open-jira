import { createContext } from 'react'

export interface ContextProps {
	isSidebarOpen: boolean

	// Methods
	openSidebar: () => void
	closeSidebar: () => void
}

export const UIContext = createContext<ContextProps>({} as ContextProps)
