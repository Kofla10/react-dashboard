import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyRoutes from './routers/routes'
import styled from 'styled-components'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container>
        <MyRoutes/>
      </Container>
    </>
  )
}
export default App

const Container = styled.div`
  display: flex;
  height: 97vh;
  background: blue;
  border-radius: 2rem;

  @media screen and (min-width: 230px) and ( max-width: 1080px ){
    flex-direction: column;    
  }
`
