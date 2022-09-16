import create from "zustand"
import produce from "immer"

const useStore = create((set) => ({
	showInfo: false,
	setShowInfo: (payload: any) => set(produce((state: any) => {
		state.showInfo = payload
	})),

	spriteImageArray: {} as any,
	setSpriteImageArray: (payload: any) => set(produce((state: any) => {
		state.spriteImageArray = payload
	})),

	isLoadFinished: false,
	setIsLoadFinished: (payload: any) => set(produce((state: any) => {
		state.isLoadFinished = payload
	})),
}))

export default useStore
