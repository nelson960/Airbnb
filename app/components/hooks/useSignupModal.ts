import { create } from "zustand";

interface SignupModal {
	isOpen:  boolean;
	open:() => void;
	close:() => void;
}

const useSignupModal = create<SignupModal>((set) =>({
	isOpen: false,
	open: () => set({ isOpen: true }),
	close: () => set({ isOpen:false})
}));

export default useSignupModal;