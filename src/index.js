import { useRef, useEffect } from 'react'

/**
 * @param {function} func - Function to be called when click outside the component
 * @returns {ref} the ref which will be attached to target element
*/
function useOnOutsideClick (func) {
    const elementInstance = useRef(null)

    const onDocumentClick = event => {
        if (!elementInstance.current.contains(event.target)) {
            func()
        }
    }

    useEffect(() => {
        document.addEventListener('click', onDocumentClick)

        return () => document.removeEventListener('click', onDocumentClick)
    }, [])

    return elementInstance
}

export default useOnOutsideClick