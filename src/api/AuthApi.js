import HttpFetch from './HttpFetch'

/**
 * The object of payload related on state
 * reducers Registration
 * @param {Object} payload 
 */
async function register (payload) {
    const url = 'https://mitraist.herokuapp.com/auth/signup'
    const resp = await HttpFetch.appPost(url, payload)
    return resp;
}

export default {
    register
}