import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: "movie",
    initialState: {
        allMovies: [],
        trailerVideo: null
    },
    reducers: {
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload
        },
        addAllMovies: (state, action) => {
            // console.log(action.payload.movies_list);

            const movies = {
                category: action.payload.category,
                movies_list: action.payload.movies_list
            }
            state.allMovies.push(movies)
        },
    }
})

export const { addTrailerVideo, addAllMovies } = movieSlice.actions;
export default movieSlice.reducer;