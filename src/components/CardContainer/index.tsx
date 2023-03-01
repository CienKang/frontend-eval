import React from 'react';
import { CardContainerProps, EventDetails } from '../../types';
import { HomeCard } from '../';
import './CardContainer.css';

const CardContainer = (props: CardContainerProps) => {
    return (<div className='cards-container'>
        {
            props.eventsData.map((event: EventDetails, idx: number) => {
                return (
                    <HomeCard key={idx} {...event} />
                );
            })
        }
    </div>);
};

export default CardContainer;