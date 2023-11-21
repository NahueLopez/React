import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

    const users = [
        {
            userName: 'NahueLopez',
            name: 'Nahuel Lopez',
            isFollowing: true
        },
        {
            userName: 'AgustinaValiente',
            name: 'Agustina Valiente',
            isFollowing: true
        },
        {
            userName: 'NoeLopez',
            name: 'Noelia Lopez',
            isFollowing: false
        }
    ]

export function App (){
    

    return (
        <section className= 'App'>
          {
            users.map(user => {
                const { userName, name, isFollowing} = user
                return (
                    <TwitterFollowCard
                        userName={userName}
                        key={userName}
                        initialisFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                )
            })
          }

        </section>

    ) 
}