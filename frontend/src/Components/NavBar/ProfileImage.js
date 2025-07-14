import React from 'react'

const ProfileImage = (props) => {
  return (
    <>
        <img width={'50%'} height={'20%'} className='profileImage' src={props.imageUrl} alt='Profile Image'/>
    </>
  )
}

export default ProfileImage