import { useEffect } from "react";
import { useState } from "react";


export default function useFetch(url) {
    const [data, setData] = useState([])

    useEffect(async () => {
        try {
            const res = await fetch(url);
            if (res.ok) {
                const data = await res.json();
                setData(data);
            } else {
                console.log("Error fetching data:", res.status);
            }
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    },[url])

    return {
        data
    }
}