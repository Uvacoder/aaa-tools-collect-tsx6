import create from 'zustand'

type storeType = {
  opened: boolean
  toggleOpened: (bool?: boolean) => void
}

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
