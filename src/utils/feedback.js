import toast from 'react-simple-toasts';
 
export const alertError = (message) => {
    toast(message, { className: 'toast-error' })
}

export const alertSuccess = (message) => {
    toast(message, { className: 'toast-success' })
}