import * as TYPES from '../types'

export const fetchStarWarsRequest = (url) => ({
    type: TYPES.FETCH_STAR_WARS_REQUEST,
    url: url
})