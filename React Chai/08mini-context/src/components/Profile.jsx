import  { useContext } from 'react'
import userContext from '../context/userContext';

function Profile() {


    const {user} = useContext(userContext);

    
    if(!user) return <div>please login </div>
        
    return (
        <div>
            hello {user.username} you are login form
        </div>
    )
        
     
}



export default Profile
