import { LoginForm } from 'components/loginForm/LoginForm'
export const LoginScreen = () => {
  return (
    <div className='login'>
      <div className='login__slide'>
        <div className='login__slide-square'></div>
        <h1>Deja que te ayudemos a mejorar todos tus procesos</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
          quo ducimus inventore unde eum doloremque veniam est et aperiam,
          tempore vitae, suscipit nostrum nihil beatae amet expedita
          necessitatibus voluptatibus optio.
        </p>
      </div>
      <LoginForm />
    </div>
  )
}
