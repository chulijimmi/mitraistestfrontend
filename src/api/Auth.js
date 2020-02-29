import HttpFetch from './HttpFetch'

export const register = async (payload) => {
    const url = 'https://mitraist.herokuapp.com/auth/signup'
    const resp = await HttpFetch.appPost(url, payload)
    return resp;
}