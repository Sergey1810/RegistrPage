import React from 'react'
import { AuthForm } from '../../components/AuthForm/AuthForm'
import './authPage.css'


export const AuthPage: React.FC = () => {
  return (
    <div className='auth-page'>
        <AuthForm/>
    </div>
  )
}


