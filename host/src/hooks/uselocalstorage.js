import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [value, setterValue] = useState();

    const loadValue = () => {
        const tempValue = localStorage.getItem(key);
        if (tempValue !== value) {
            if (typeof tempValue === 'string' && !tempValue.includes("{")) {
                if (tempValue === "true" || tempValue === "false") {
                    setterValue(tempValue === "true");
                    return;
                }
                setterValue(tempValue);
            } else {
                setterValue(JSON.stringify(tempValue));
            }
        }
    }

    const saveValue = (val) => {
        if (typeof val === 'string') {
            localStorage.setItem(key, val);
        }
        else {
            localStorage.setItem(key, JSON.stringify(val));
        }
    }

    const setValue = (val) => {
        setterValue(val);
        saveValue(val);
    }

    useEffect(() => {
        const tempValue = localStorage.getItem(key);
        if (tempValue === null && tempValue !== undefined && initialValue !== "undefined") {
            if (typeof initialValue === 'string') {
                localStorage.setItem(key, initialValue);
            }
            else {
                localStorage.setItem(key, JSON.stringify(initialValue));
            }
            setValue(initialValue)
        } else {
            try {
                setterValue(JSON.parse(tempValue));
            } catch (e) {
                setterValue(tempValue);
            }
        }
        window.addEventListener('storage', loadValue);
        return () => {
            window.removeEventListener('storage', loadValue);
        }
    }, []);

    return [value, setValue];
}

export default useLocalStorage;