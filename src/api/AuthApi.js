import HttpFetch from './HttpFetch'

const register = async ({payload}) => {
    const url = 'https://mitraist.herokuapp.com/auth/signup'
    console.log('register payload', payload);
    const resp = await HttpFetch.appPost(url, payload)
    return resp;
}

export default {
    register
}