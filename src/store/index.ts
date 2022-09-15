import create from "zustand"
import produce from "immer"

const useStore = create((set) => ({
	showInfo: false,
	setShowInfo: (payload: any) => set(produce((state: any) => {
		state.showInfo = payload
	})),
}))

export default useStore
