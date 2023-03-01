import React, { useEffect, useState } from 'react';
import {CardContainer, FilterBar} from '../../components';
import { GET_ALL_EVENTS } from '../../constants/ApiEndPoints';
import { EventDetails } from '../../types';
import makeRequest from '../../utils/makeRequest';


import { FilterTypes } from '../../types';
const HomePage = () => {
    const [eventsData, setEventsData] = useState<EventDetails[]>([]);
    const [search, setSearch] = useState<string>('');
    const [filters, setFilters] = React.useState<FilterTypes>({
        0: {
            'name': 'ALL',
            'checked': false
        },
        1: {
            'name': 'BOOKMARKED',
            'checked': false
        },
        2: {
            'name': 'REGISTERED',
            'checked': false
        },
        3: {
            'name': 'SEATS AVAILABLE',
            'checked': false
        }
    });

    
    useEffect(() => {
        makeRequest({...GET_ALL_EVENTS},{}).then(data => {
            setEventsData(data);
            // setEventsData(eventsData.sort((a,b) => {
            //     return new Date(b.datetime).getTime() - new Date(a.datetime).getTime();
            // }));
            console.log(data);
        });
    },[]); 
    
    useEffect(() => {

        if(search !== ''){
            makeRequest({...GET_ALL_EVENTS},{}).then(data => {
                setEventsData(data.filter((event:any) => {
                    return event.name.toLowerCase().includes(search.toLowerCase());
                }));
            });
        }

        if(search==='')
        {
            makeRequest({...GET_ALL_EVENTS},{}).then(data => {
                setEventsData(data);
                console.log(data);
            });
        }

    },[search, filters]);
    return ( 
        <div className="home-page">
            <FilterBar filters={filters} setFilters={setFilters} setSearch={setSearch} />
            <CardContainer eventsData={eventsData} />
        </div>
    );
};
 
export default HomePage;