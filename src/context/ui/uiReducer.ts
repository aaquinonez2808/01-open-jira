import { UIState } from './'

type UIActionType =
	| { type: 'UI - Open Sidebar' }
	| { type: 'UI - Close Sidebar' }
	| { type: 'UI - Open Add Entry' }
	| { type: 'UI - Close Add Entry' }
	| { type: 'UI - Start Dragging' }
	| { type: 'UI - End Dragging' }

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
	switch (action.type) {
		case 'UI - Open Sidebar':
			return {
				...state,
				isSidebarOpen: true
			}
		case 'UI - Close Sidebar':
			return {
				...state,
				isSidebarOpen: false
			}
		case 'UI - Open Add Entry':
			return {
				...state,
				isAddingEntry: true
			}
		case 'UI - Close Add Entry':
			return {
				...state,
				isAddingEntry: false
			}
		case 'UI - Start Dragging':
			return {
				...state,
				isDragging: true
			}
		case 'UI - End Dragging':
			return {
				...state,
				isDragging: false
			}
		default:
			return state
	}
}
