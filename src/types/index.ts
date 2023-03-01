export interface EventDetails {
    id: number;
    name: string;
    description: string;
    venue: string;
    datetime: string;
    timezone : string;
    areSeatsAvailable: boolean;
    isRegistered: boolean;
    isBookmarked: boolean;
    imgUrl: string;
}

export interface CardContainerProps {
    eventsData: EventDetails[];
}

export interface FilterTypes {
    [key: string]: {
        name: string;
        checked: boolean;
    }
}

export interface FilterProps {
    filters: FilterTypes;
    setFilters: React.Dispatch<React.SetStateAction<FilterTypes>>;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}