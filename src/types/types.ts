export interface RatingsType {
    id:number;
    title:string;
    count:number;
    percent:number;
}
export interface addedByStatusType {
    "yet": number;
    "owned": number;
    "beaten": number;
    "toplay": number;
    "dropped": number;
    "playing": number;
}
export interface singlePlatformType{
    "id": number;
    "name": string;
    "slug": string;
    "image": null,
    "year_end": null,
    "year_start": null,
    "games_count": number;
    "image_background": string;
}
export interface platformsType{
    "platform": singlePlatformType
    "released_at": string;
    "requirements_en": null,
    "requirements_ru": null
}
export interface parentPlatformType {
    "platform": {
        "id": number;
        "name": string;
        "slug": string;
    }
}
export interface genresType {
    "id": number;
    "name": string;
    "slug": string;
    "games_count": number;
    "image_background": string;
}
export interface tagsType {
    "id": number;
    "name": string;
    "slug": string;
    "language": string;
    "games_count": number;
    "image_background": string;
}
export interface esrbType{
    id:number;
    "name": string
    "slug": string;
}
export interface shortScreenShotsType{
    id:number;
    image:string;
}
export interface gameType{
    "id": number;
    "slug": string;
    "name": string;
    "released": string;
    "tba": boolean;
    "background_image":string;
    "rating": number;
    "rating_top": number;
    "ratings": RatingsType[];
    "ratings_count": number;
    "reviews_text_count": number;
    "added": number;
    "added_by_status": addedByStatusType;
    "metacritic": number;
    "playtime": number;
    "suggestions_count": number;
    "updated": string;
    "user_game": null;
    "reviews_count": number;
    "saturated_color": string;
    "dominant_color": string;
    "platforms": platformsType[];
    "parent_platforms": parentPlatformType[];
    "genres": genresType[];
    "stores": any[];
    "clip": null;
    "tags": tagsType[];
    "esrb_rating": esrbType;
    "short_screenshots": shortScreenShotsType[]
}
export interface gamesReducerType {
    "count": number|null;
    "next": string|null;
    "previous": null;
    "results": gameType[]
    "seo_title": string|null;
    "seo_description": string|null;
    "seo_keywords": string|null;
    "seo_h1": string|null;
    "noindex": boolean;
    "nofollow": boolean;
    "description": string|null;
    "filters": {
        "years": any[]
    },
    "nofollow_collections": string[];

}
export interface mainType {
    games:gamesReducerType;
    filteredGames:gameType[];
    searchedGames:gameType[];
    singleGame:gameType;
}
export type SortingType = 'released'|'-released'|'rating'|'-rating'
