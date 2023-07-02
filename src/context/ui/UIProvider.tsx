import React, { FC, useReducer } from 'react'
import { UIContext, uiReducer } from './'

export interface UIState {
	isSidebarOpen: boolean
	isAddingEntry: boolean
	isDragging: boolean
}
interface props {
	children: React.ReactNode
}
const UI_INITIAL_STATE: UIState = {
	isSidebarOpen: false,
	isAddingEntry: false,
	isDragging: false
}

export const UIProvider: FC<props> = ({ children }) => {
	const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

	const openSidebar = () => dispatch({ type: 'UI - Open Sidebar' })
	const closeSidebar = () => dispatch({ type: 'UI - Close Sidebar' })
	const openAddEntry = () => dispatch({ type: 'UI - Open Add Entry' })
	const closeAddEntry = () => dispatch({ type: 'UI - Close Add Entry' })
	const startDragging = () => dispatch({ type: 'UI - Start Dragging' })
	const endDragging = () => dispatch({ type: 'UI - End Dragging' })

	return (
		<UIContext.Provider
			value={{
				...state,

				openSidebar,
				closeSidebar,

				closeAddEntry,
				openAddEntry,

				startDragging,
				endDragging
			}}>
			{children}
		</UIContext.Provider>
	)
}
