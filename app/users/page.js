import Link from 'next/link'
import getAllUsers from '@/lib/getAllUsers'
import React from 'react'

export default async function UserPage() {
    const userData = getAllUsers()

    const users = await userData

    console.log('Hello')

    const content = (
        <section>
            <h2>
                <Link href="/">Back to Home</Link>
            </h2> <br />

            {
                users.map(user => {
                    return (
                        <>
                            <p key={user.id}><Link href={`/users/${users.id}`}>{user.name} { user.id}</Link></p>
                        </>
                    )
                })
}

        </section>

    )


    return content



    
 
}
