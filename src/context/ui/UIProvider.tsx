import React, { FC, useReducer } from 'react'
import { UIContext, uiReducer } from './'

export interface UIState {
	isSidebarOpen: boolean
}
interface props {
	children: React.ReactNode
}
const UI_INITIAL_STATE: UIState = {
	isSidebarOpen: false
}

export const UIProvider: FC<props> = ({ children }) => {
	const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

	const openSidebar = () => dispatch({ type: 'UI-Open Sidebar' })
	const closeSidebar = () => dispatch({ type: 'UI-Close Sidebar' })

	return (
		<UIContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
			{children}
		</UIContext.Provider>
	)
}
