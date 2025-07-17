import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface UIState {
  sidebarOpen: boolean
  activeTab: string
  notifications: Array<{
    id: string
    message: string
    type: 'info' | 'success' | 'warning' | 'error'
  }>
  toggleSidebar: () => void
  setSidebarOpen: (open: boolean) => void
  setActiveTab: (tab: string) => void
  addNotification: (notification: Omit<UIState['notifications'][0], 'id'>) => void
  removeNotification: (id: string) => void
  clearNotifications: () => void
}

export const useUIStore = create<UIState>()(
  immer(set => ({
    sidebarOpen: false,
    activeTab: 'home',
    notifications: [],
    toggleSidebar: () =>
      set(state => {
        state.sidebarOpen = !state.sidebarOpen
      }),
    setSidebarOpen: open => set({ sidebarOpen: open }),
    setActiveTab: tab => set({ activeTab: tab }),
    addNotification: notification =>
      set(state => {
        const id = Math.random().toString(36).substring(2, 9)
        state.notifications.push({
          id,
          ...notification,
        })
      }),
    removeNotification: id =>
      set(state => {
        state.notifications = state.notifications.filter(n => n.id !== id)
      }),
    clearNotifications: () => set({ notifications: [] }),
  }))
)
