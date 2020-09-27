export const allPosts= ()=>{
    return   fetch(`${process.env.REACT_APP_API_URL}/posts`,{
        method:"GET"
    })
}