import { NavLink } from "react-router-dom"

const ProfileContainer = ({email, handleLogout}: {email?: string, handleLogout: ()=>void}) => {
  return(
    email == '' ?
      <NavLink to={'/auth'}>
        Log in
      </NavLink >
    :
      <>
        <span>{email}</span>
        <button onClick={handleLogout}>Logout</button> 
      </>
  )
}

export default ProfileContainer