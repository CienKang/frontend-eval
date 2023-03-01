import React, { useEffect } from 'react';
import { EventDetails } from '../../types';
import { useState } from 'react';
import { BOOKMARK_EVENT_BY_ID, GET_EVENT_DETAIL_BY_ID } from '../../constants/ApiEndPoints';
import makeRequest from '../../utils/makeRequest';

import './SingleEventCard.css';
import { getFormattedDateFromUtcDate } from '../../utils/common';
import { useParams } from 'react-router-dom';
const SingleCard = () => {
    const {id} = useParams();
    const[prop,setProp] = useState<EventDetails>({
        id: 100,
        name: 'Name',
        description: '',
        datetime: '',
        venue: '',
        imgUrl: '',
        isBookmarked: false,
        isRegistered: false,
        areSeatsAvailable: true,
        timezone: '',
    });

    const date = new Date(prop?.datetime).toDateString();
    const [isBookMarked, setBookMarked] = useState(prop?.isBookmarked);
    const [isRegistered, setRegistered] = useState(prop?.isRegistered);
    const [areSeatsAvailable, setSeatsAvailable] = useState(prop?.areSeatsAvailable);

    useEffect(() => {
        makeRequest({ ...GET_EVENT_DETAIL_BY_ID(id) }, {}).then(data => {
            setProp(data);
            console.log(data);
        });
    }, [isBookMarked, isRegistered, areSeatsAvailable]);


    const handleBookmarkClick = async () => {
        await makeRequest({ ...BOOKMARK_EVENT_BY_ID(prop?.id) }, { data: { 'isBookmarked': !isBookMarked } }).then(data => {
            console.log(data);
        });
        setBookMarked(!isBookMarked);
    };

    const handleRegisterClick = async () => {
        await makeRequest({ ...BOOKMARK_EVENT_BY_ID(prop?.id) }, { data: { 'isRegistered': !isRegistered } }).then(data => {
            console.log(data);
        });
        setRegistered(!isRegistered);
    };
    return (
        <div className="single-card">
            <img src={prop?.imgUrl} alt={prop?.name} />
            <div className='break-line'></div>
            <div className='card-details'>
                <h1>{prop?.name.toUpperCase()}</h1>
                <p className='card-short-desc'>{prop?.description}</p>
                <span className='card-venue' > <b className='bolder'> VENUE </b> : {prop?.venue}</span>
                <span className='card-venue' > <b className='bolder'> DATE </b> : {getFormattedDateFromUtcDate(date)} </span>
                <div className='card-buttons'>
                    {
                        !prop.areSeatsAvailable ? (
                            <div className='card-reject row-wise btn'>
                                <i className="fa-solid fa-circle-xmark fa-2x"></i>
                                <span> NO SEATS AVAILABLE</span>
                            </div>
                        ) : (<></>)
                    }
                    {
                        prop.isRegistered ? (
                            <div className='card-register row-wise  btn'>
                                <i className="fa-solid fa-circle-check fa-2x"></i>
                                <span>REGISTERED</span>
                            </div>
                        ) : (<></>)
                    }
                    {
                        prop.isBookmarked ? (
                            <div className='card-bookmark row-wise btn' onClick={handleBookmarkClick}>
                                <i className="fa-regular fa-bookmark fa-2x"></i>
                            </div>
                        ) : (
                            <div className='card-bookmark row-wise btn' onClick={handleBookmarkClick}>
                                <i className="fa-solid fa-bookmark fa-2x"></i>
                            </div>
                        )

                    }
                </div>

                <div className='single-register-button'>
                    {
                        prop.areSeatsAvailable ? (
                            <button className='single-register-btn' onClick={handleRegisterClick}>{prop.isRegistered ? 'UNREGISTER' : 'REGISTER'}</button>
                        ):( 
                            <></>
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default SingleCard;