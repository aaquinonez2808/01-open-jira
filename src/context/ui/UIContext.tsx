import { createContext } from 'react'

export interface ContextProps {
	isSidebarOpen: boolean
	isAddingEntry: boolean
	isDragging: boolean
	// Methods
	openSidebar: () => void
	closeSidebar: () => void
	openAddEntry: () => void
	closeAddEntry: () => void
	startDragging: () => void
	endDragging: () => void
}

export const UIContext = createContext<ContextProps>({} as ContextProps)
