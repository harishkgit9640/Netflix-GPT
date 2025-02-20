import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: "movie",
    initialState: {
        allMovies: [],
        trailerVideo: null,
        movies_name: null,
        movies_array: null
    },
    reducers: {
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload
        },
        addSearchResult: (state, action) => {
            state.movies_name = action.payload.movies_name,
                state.movies_array = action.payload.movies_array

        },
        addAllMovies: (state, action) => {
            const movies = {
                category: action.payload.category,
                movies_list: action.payload.movies_list
            }
            state.allMovies.push(movies)
        },
    }
})

export const { addTrailerVideo, addAllMovies, addSearchResult } = movieSlice.actions;
export default movieSlice.reducer;