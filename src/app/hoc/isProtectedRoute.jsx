export const IsProtectedRoute=({children})=>{
    const user=JSON.parse(localStorage.getItem('user') ?? '{}')
    //make an api with user id
        // return user.email && user.token
        if (user){
            return children;
        }
        window.location.href='/login'
        return null
    }