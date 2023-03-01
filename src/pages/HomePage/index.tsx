import React, { useEffect, useState } from 'react';
import {CardContainer} from '../../components';
import { GET_ALL_EVENTS } from '../../constants/ApiEndPoints';
import { EventDetails } from '../../types';
import makeRequest from '../../utils/makeRequest';



const HomePage = () => {
    const [eventsData, setEventsData] = useState<EventDetails[]>([]);
    const [search, setSearch] = useState<string>('');


    useEffect(() => {
        makeRequest({...GET_ALL_EVENTS},{}).then(data => {
            setEventsData(data);
            // setEventsData(eventsData.sort((a,b) => {
            //     return new Date(b.datetime).getTime() - new Date(a.datetime).getTime();
            // }));
            console.log(data);
        });

    },[]);  
    return ( 
        <div className="home-page">
            <CardContainer eventsData={eventsData} />
        </div>
    );
};
 
export default HomePage;