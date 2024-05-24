'use client'
import { useUserStore } from '@/providers/user-store-provider';
import { Button } from '@nextui-org/react';
import { gapi } from 'gapi-script';
import React, { useEffect, useState } from 'react'
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import OpxInput from '@/components/common/opxInput/OpxInput';
import { MailIcon } from '@/components/icons/MailIcon';
import { User } from '@/types/types';
import { authenticate, googleAuthenticate } from '@/actions/authAction';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const router = useRouter()
  const [password, setPassoword] = useState('');
  const clientId = "748655112741-e9hoqd7kl7lp3438g6sos4rk1qol8v2g.apps.googleusercontent.com";
  const { user, setUser } = useUserStore(
    (state) => state,
  )
  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        clientId: clientId
      })
    }
    gapi.load("client:auth2", start)
  }, [])

  const onSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    const user = response as GoogleLoginResponse
    const userData: User = {
      email: user.profileObj.email,
      name: user.profileObj.name,
      token: user.accessToken,
      role: "user"
    }
    googleAuthenticate(userData)
    setUser(userData);
  }

  const handleSubmit = async () => {
    const data = await authenticate(email, password)
    setUser(data);
    router.push('/admin')
  }

  const handleChange = (field: string, value: string) => {
    if(field === "email"){
      setEmail(value);
    }else{
      setPassoword("password")
    }
  }

  return (
    <div className='flex flex-col items-center gap-4 p-6 bg-orange-500 rounded-xl'>
      <div>Iniciar Sesion</div>
      <OpxInput
        label='Correo Electronico'
        placeholder='Ingrese correo electronico'
        icon={<MailIcon className="text-2xl text-default-400 pointer-events-none" />}
        value={email}
        onChange={(e) => handleChange("email", e.target.value)}
      />
      <OpxInput
        label="Contraseña"
        placeholder="Ingrese contraseña"
        isPassoword
        value={password}
        onChange={(e) => handleChange("passoword", e.target.value)}
      />
      <div className='flex flex-row justify-end w-full'>
        <Button onPress={handleSubmit}>
          Iniciar Sesion
        </Button>
      </div>
      <GoogleLogin
        clientId={clientId}
        onSuccess={onSuccess}
        buttonText='Continuar con Google'
      />
    </div>
  )
}

export default LoginForm