/**
 * Http Fetch Request POST Method
 * @param {String} url 
 * @param {Any} data 
 * @param {Object} header 
 */
const appPost = async (url, data, header={} )=>{
    let resp = await fetch(url, {
        body:JSON.stringify(data),
        method:'POST',
        headers:{
            ...header,
            "content-type":'application/json',
        }
    })

    return await resp.json()
}

/**
 * Http Fetch Request GET Method
 * @param {String} url 
 * @param {Object} header 
 */
const appGet = async (url, header={})=>{
    let resp = await fetch(url, {
        method:'GET',
        headers:{
            ...header,
            "content-type":'application/json',
        }
    })

    return await resp.json()
}

export default {appGet, appPost}
