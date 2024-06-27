//import { Suspense, useId } from 'react'
import getUser from '@/lib/getUser'
//import getUserPosts from '@/lib/getUserPosts'
//import UserPosts from './components/UserPosts'
// this approach helps request en parallel et non en cascade
export default async function UserDetail(userId ) {

    
    const userData = getUser(userId)
    console.log(userId)        
  //  const userPostsData = getUserPosts(userId)

    // this approach allow you to call all ur req simultanuously.
    // const [user, userPosts] = await Promise.all([userData, userPostsData])

    const user = await userData;
    return (
        <>
            <h1 key={user.id}>{user.name}</h1>
            <br />
            // suspense is used to progressevely show user data on the interface.
            
            
            
            
            
            {/* <Suspense fallback={<h2>Loading...</h2>}>
                <UserPosts promise={userPostsData} />
            </Suspense> */}
        </>
    )
    
  



}












//     // return (
//     //     <>
//     //         <h2>{user.name }</h2><br />
//     //         <UserPosts post = {userPosts}/> 
//     //     </>
//     // )


