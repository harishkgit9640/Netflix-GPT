export const LOGO_URL = 'https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'


export const USER_AVATAR = "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"


export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_medium.jpg"


// TMDB API CREDENTIALS

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_API_KEY,
    }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const API_URLS = [
    { title: "Now Playing Movies", url: "https://api.themoviedb.org/3/movie/now_playing?page=1" },
    { title: "Popular Movies", url: "https://api.themoviedb.org/3/movie/popular?page=1" },
    { title: "Top Rated Movies", url: "https://api.themoviedb.org/3/movie/top_rated?page=1" },
    { title: "Upcoming Movies", url: "https://api.themoviedb.org/3/movie/upcoming?page=1" }
]

export const LANGUAGE = [
    { "identity": "en", "name": "English" },
    { "identity": "hi", "name": "हिन्दी" },
    { "identity": "span", "name": "Spanish" },
    { "identity": "bn", "name": "Bengali" },
    { "identity": "mr", "name": "Marathi" },
    { "identity": "ta", "name": "Tamil" },
    { "identity": "te", "name": "Telugu" },
]