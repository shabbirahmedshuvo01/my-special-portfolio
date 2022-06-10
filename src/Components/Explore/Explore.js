import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Explore = () => {
    const { detailId } = useParams();

    const [details, setDetails] = useState([]);

    useEffect(() => {
        const url = `https://gentle-plains-92462.herokuapp.com/project/${detailId}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setDetails(data)
            });
    }, []);

    return (
        <div className='App bg-dark text-white'>
            <h2 className='text-warning'>Pictures of {details.name}</h2>
            <div className='App mt-5'>
                <img style={{ width: "50rem", height: "25rem" }} src={details.ss1} alt="" />
                <img className='mt-5' style={{ width: "50rem", height: "25rem" }} src={details.ss2} alt="" />
                <img className='mt-5' style={{ width: "50rem", height: "25rem" }} src={details.ss3} alt="" />

                <div>
                    <h2 className='text-warning mt-5'>Codes of {details.name}</h2>
                    <br />
                    <h3>GitHub</h3>
                    <h5>Client Side Code: <span className='text-warning'>Click Here</span> <span><a style={{ color: '#FFFFFF' }} href={details.gitc}><i class="fa fa-github fa-lg"></i></a></span></h5>
                    <h5>Client Side Code: <span className='text-warning'>Click Here</span> <span><a style={{ color: '#FFFFFF' }} href={details.gits}><i class="fa fa-github fa-lg"></i></a></span></h5>
                </div>

            </div>
        </div>
    );
};

export default Explore;