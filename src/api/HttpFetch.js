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
