import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BOOKMARK_EVENT_BY_ID } from '../../constants/ApiEndPoints';
import { EventDetails } from '../../types';
import { getFormattedDateFromUtcDate } from '../../utils/common';
import makeRequest from '../../utils/makeRequest';

import './HomeCard.css';

const HomeCard = (prop: EventDetails) :JSX.Element=> {

    const date = new Date(prop.datetime).toDateString();
    const [isBookMarked, setBookMarked] = useState(prop.isBookmarked);
    const [isRegistered, setRegistered] = useState(prop.isRegistered);
    const [areSeatsAvailable, setSeatsAvailable] = useState(prop.areSeatsAvailable);

    const handleBookmarkClick = async() => {
        makeRequest({...BOOKMARK_EVENT_BY_ID(prop.id)},{data:{'isBookmarked' : !isBookMarked}}).then(data => {
            console.log(data);
            setBookMarked(!isBookMarked);
        });
    };
    const navigate = useNavigate();
    const handleClickCard = () =>{
        navigate(`/event/${prop.id}`);
    };
    return (
        <div className="card"  >
            <img src={prop.imgUrl} alt={prop.name} onClick={handleClickCard} />
            <div className='break-line'></div>
            <div className='card-details'>
                <h1>{prop.name.toUpperCase()}</h1>
                <p className='card-short-desc'>{prop.description}</p>
                <span className='card-venue' > <b className='bolder'> VENUE </b> : {prop.venue}</span>
                <span className='card-venue' > <b className='bolder'> DATE </b> : {getFormattedDateFromUtcDate(date)} </span>
                <div className='card-buttons'>
                    {
                        prop.areSeatsAvailable ? (
                            <></>
                        ) : (
                            <div className='card-reject row-wise btn'>
                                <i className="fa-solid fa-circle-xmark fa-2x"></i>
                                <span> NO SEATS AVAILABLE</span>
                            </div>
                        )
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
                        isBookMarked ? (
                            <div className='card-bookmark row-wise btn' onClick={handleBookmarkClick}>
                                <i className="fa-regular fa-bookmark fa-2x"></i>
                            </div>
                        ) :(
                            <div className='card-bookmark row-wise btn' onClick={handleBookmarkClick}>
                                <i className="fa-solid fa-bookmark fa-2x"></i>
                            </div>
                        )

                    }
                </div>

            </div>
        </div>
    );
};

export default HomeCard;