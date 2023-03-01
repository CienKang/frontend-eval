import React from 'react';
import { FilterProps } from '../../types';

import './FilterBar.css';
const FilterBar = ({filters , setFilters , setSearch}: FilterProps ) => {

    const [arrowDown, setArrowDown] = React.useState<boolean>(true);

    const handleArrowDown = () => {
        setArrowDown(!arrowDown);
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };


    const handleClickFilter = (idx:number) =>{
        const newFilters = {...filters};
        newFilters[idx].checked = !newFilters[idx].checked;
        setFilters(newFilters);
    };

    return (
        <div className='filter-container'>
            <div className='one-row'>
                <div className='filter-icon'>
                    <i className='fa-solid fa-filter fa-3x'></i>
                    <span>FILTER</span>
                    {
                        !arrowDown ? 
                            <i className='fa-solid fa-chevron-up fa-2x' onClick={handleArrowDown}></i>
                            :
                            <i className='fa-solid fa-chevron-down fa-2x' onClick={handleArrowDown}></i>
                    }
                </div>
                <div className='search-bar'>
                    <input type='text' placeholder='EVENT NAME' onChange={handleSearch} />
                    <i className='fa-solid fa-search fa-2x'></i>
                </div>
            </div>
            { arrowDown &&
            <div className='filter-options'>
                {
                    Object.keys(filters).map((key,idx) => {
                        return (
                            <div className='filter-option' key={key} onClick={()=>handleClickFilter(idx)} >
                                {filters[key].checked ? <i className='fa-solid fa-circle-dot fa-2x'  ></i> : <i className='fa-regular fa-circle fa-2x'></i>}
                                <span>{filters[key].name}</span>
                            </div>
                        );
                    })
                }
            </div>
            }
        </div>
    );
};

export default FilterBar;