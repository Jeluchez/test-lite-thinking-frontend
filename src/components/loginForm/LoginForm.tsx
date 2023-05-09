import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

type Inputs = {
  email: string
  password: string
}
type syntheticBaseEvent = React.SyntheticEvent<HTMLButtonElement>

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    mode: 'onBlur'
  })

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data)

  const [showPassword, setShowPassword] = useState(false)

  const handleTogglePasswordVisibility = (ev: syntheticBaseEvent) => {
    ev.preventDefault()

    setShowPassword(prevShowPassword => !prevShowPassword)
  }

  return (
    <div className='login__form-container'>
      <div className='login__form'>
        <h1>Empezar</h1>
        <p>Inicia sesión ahora</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Correo:</label>
          <div className='form__input'>
            <input
              id='email'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Email is invalid'
                }
              })}
              placeholder='youremail@something.com'
              // onBlur={validateEmail}
            />
          </div>
          {errors.email && <span>{errors.email.message}</span>}

          <label htmlFor='password'>Contraseña:</label>
          <div className='form__input'>
            <input
              type={showPassword ? 'text' : 'password'}
              id='password'
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters'
                }
              })}
            />

            <button onClick={handleTogglePasswordVisibility}>
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              />
            </button>
          </div>
          {errors.password && <span>{errors.password.message}</span>}
          <input
            type='submit'
            value='Iniciar Sesión'
            className='login__form-submit'
          />
        </form>
      </div>
    </div>
  )
}
