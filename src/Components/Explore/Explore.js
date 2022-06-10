import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Explore = () => {
    const { detailId } = useParams();

    const [details, setDetails] = useState([]);

    useEffect(() => {
        const url = `details.json/porject/${detailId}`
        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data.length))
    }, []);

    return (
        <div>
            <h2>I am here {details?.length}</h2>
            <h2>I am here {detailId}</h2>
        </div>
    );
};

export default Explore;