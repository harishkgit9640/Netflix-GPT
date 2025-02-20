import React from 'react'
import SearchBar from './SearchBar'
import { BG_URL } from '../utils/constants'
import SearchResult from './SearchResult'

const GptSearchPage = () => {
    return (
        <>
            <div className="fixed -z-10">
                <img className="w-screen object-cover" src={BG_URL} alt="logo" />
            </div>
            <div className='pt-52'>
                <SearchBar />
                <SearchResult />
            </div>
        </>
    )
}

export default GptSearchPage