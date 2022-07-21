import create from 'zustand'

import { storeType } from '@/types/types'

const store = create<storeType>((set) => ({
  opened: false,
  toggleOpened: (bool) => set((state) => ({ opened: bool || !state.opened })),
}))

export const useNavbar = () => {
  const opened = store((state) => state.opened)
  const toggleOpened = store((state) => state.toggleOpened)

  return {
    opened,
    toggleOpened,
  }
}
