import React from 'react'
import './CustomButton.scss'

function CustomButton({isGoogleSignIn,children,...otherProps}) {
    return (
        <button  className="custom-button"
        // className={`${isGoogleSignIn ?'google-sign-in' : ''}custom-button`} 
        {...otherProps}
        >
            {children}
        </button>
    )
}

export default CustomButton
