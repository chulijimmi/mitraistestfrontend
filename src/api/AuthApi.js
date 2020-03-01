import HttpFetch from './HttpFetch'

const register = async ({payload}) => {
    const url = 'https://mitraist.herokuapp.com/auth/signup'
    // const url = 'http://127.0.0.1:64990/auth/signup'
    console.log('register payload', payload);
    const resp = await HttpFetch.appPost(url, payload)
    return resp;
}

export default {
    register
}