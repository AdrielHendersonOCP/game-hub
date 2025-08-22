//import useData from "./useData";
import genres from "../data/genres";

export interface Genre{
    id: number; 
    name: string; 
    image_background: string;
}

//If we want realtime data from the API for genres use this... 
//const useGenres = () => useData<Genre>('/genres');

//If instead we want to use previously captured static data use this...   
const useGenres = () => ({data: genres, isLoading: false, error: null});

export default useGenres;