import { useState, useEffect, useCallback } from 'react';

const defaultOptions = {
    fetchOnMount: true,
    initialData: [],
};

/**
 * Custom hook to fetch data using Axios promise and manage
 * loading and error states.
 * @param {promise} promise - Axios promise to resolve
 * @param {object} options - Options object
 * @returns {object} - Data, loading, error, and refetch function
 */
const useAxios = (promise, options = defaultOptions) => {
    const [data, setData] = useState(defaultOptions.initialData);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = useCallback(
        async (...args) => {
            try {
                setLoading(true);
                const response = await promise(...args);
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        },
        [promise],
    );

    useEffect(() => {
        if (!options.fetchOnMount) {
            return;
        }

        fetchData();
    }, [fetchData, options?.fetchOnMount]);

    return { data, loading, error, refetch: fetchData };
};

export default useAxios;
