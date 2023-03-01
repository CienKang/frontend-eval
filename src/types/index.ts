export interface EventDetails {
    id: number;
    name: string;
    description: string;
    venue: string;
    datetime: Date;
    timezone : string;
    areSeatsAvailable: boolean;
    isRegistered: boolean;
    isBookmarked: boolean;
    imgUrl: string;
}

export interface CardContainerProps {
    eventsData: EventDetails[];
}