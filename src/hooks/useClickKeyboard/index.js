import { useState, useEffect } from "react"


export default (keyDefault) => {
    const [key, setKey] = useState(keyDefault)
    const [prevKey, setPrevKey] = useState(keyDefault)
    const keydown = (ev) => {
        setPrevKey(key);
        setKey(ev.keyCode)
    }

    useEffect(()=> {
        document.addEventListener('keydown', keydown)
        return () => document.removeEventListener('keyword', keydown)
    }, [key])

    return [ key, prevKey ]
}