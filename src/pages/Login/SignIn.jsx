import React from 'react'
import { TwitterLogo } from '../../assets/images/icons'
import { Link } from 'react-router-dom'
import Input from '../../components/index'
import Style  from '../../components/index'

function SignIn() {
  return (
    <div>
      <form className='w-[450px] mx-auto mt-[60px]'>
        <Link className="mb-[36px] inline-block" to = {'/'}>
        <TwitterLogo/>
        </Link> 
        <h1 className='font-bold text-[42px] text-[#000000]'>Log in to Twitter</h1>
        
          <Input/>
      </form>
    </div>
  )
}

export default SignIn
