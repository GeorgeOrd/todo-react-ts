import { ReactElement } from "react"
import HelloButton from './Button' 

export default function UserList(obj:{users: Array<any>}){
    const listAll : ReactElement[] = obj.users.map(user =>
        <li key={user.name} style={{color :user.id ? 'green' : 'skyblue' }}>
            User's First Name: <b>{user.name}</b>
            {user.lastname && <p>User Second Name: {user.lastname}</p> }
            <HelloButton username={user.name}/>
        </li>
    )

     return (
        <ul>
            {listAll}
        </ul>
     )
}