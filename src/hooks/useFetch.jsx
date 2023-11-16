import { useState, useEffect } from "react";

const useFetch = (url, method="GET") => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null); 
    const [options, setOptions] = useState(null);

    const postData = (postData) => {        
        setOptions({
            method:"POST",
            headers:{
                "Content-Type" : "application/JSON"
            },
            body:JSON.stringify(postData)
        })
    }

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async (fetchOption) => {
            setIsPending(true);

            try {
                const res = await fetch(url,{...fetchOption , signal: controller.signal });

                if (!res.ok) {
                    throw new Error(res.statusText);
                }

                const jsonData = await res.json();
                setData(jsonData);
                setError(null);
            } catch (err) {
                if (err.name === "AbortError") {
                    console.log("The fetch was aborted");
                } else {
                    setError("404");
                    setError(err.message)
                }
            } 
        };

        fetchData();

        if(method === 'GET'){
            fetchData()
        }
        if(method === "POST" && options){
            fetchData(options)
        }

        return () => {
            controller.abort();
        };
    }, [url,options,method]);

    return { data, isPending, error, postData };
};

export default useFetch;