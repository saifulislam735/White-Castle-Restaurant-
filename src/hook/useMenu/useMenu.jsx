import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setItem] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => {
                setItem(data);
                setLoading(false);
            }
            )
    }, [])
    return [menu, loading];
};

export default useMenu;