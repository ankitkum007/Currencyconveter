import { useEffect, useState } from "react";

export function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_xevDTus0ioHqKDFBqF0sTY0NavPk8yQSLLwDLoRO`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setData(result.data);  // Assume the data is within the "data" property
            } catch (err) {
                setError(err.message);
            }
        };

        fetchData();
    }, [currency]);

    if (error) {
        console.error(`Error fetching currency info: ${error}`);
    }

    return data;
}

export default useCurrencyInfo;
