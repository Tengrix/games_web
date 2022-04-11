interface PlatformResultsGamesType{
    "id": number;
    "slug": string;
    "name": string;
    "added": number
}
export interface PlatformResultsType{
    "id": number;
    "name": string;
    "slug": string;
    "games_count": number;
    "image_background": string;
    "image": null,
    "year_start": null,
    "year_end": null,
    "games":PlatformResultsGamesType[]
}
export interface PlatformTypes{
    count:number|null;
    next:string|null;
    previous:null;
    results:PlatformResultsType[]
}