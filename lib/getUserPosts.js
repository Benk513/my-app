export default async function getUserPosts(props) {
 
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${props.id}`,{next:{revalidate: 60}});

    
    if (!res.ok) throw new Error('failed to fetch posts for the user.')
    
    return res.json()
}


// fetch data in nextjs
// https://nextjs.org/docs/basic-features/data-fetching/get-static-props