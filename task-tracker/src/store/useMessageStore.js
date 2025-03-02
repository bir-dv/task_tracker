//manage success and error messages.
import { create } from "zustand";

const useMessageStore = create((set) => ({
    message: '',
    messageType: '', //type indicate whether the message is success or error

    setMessage: (message, type='success') => set({message, messageType:type}),
    clearMessage: () => ({message: '', messageType: ''})
}));

export default useMessageStore;