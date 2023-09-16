import React,{useRef} from 'react'

const App = () => {
  let userRef=useRef()
  let passRef=useRef()

  let handleSubmit=(e)=>{
    e.preventDefault()
    let username=userRef.current.value
    let password=passRef.current.value
    console.log({username,password});
  }
  return (
    <div>
      <form action="">
        <fieldset>
          <legend>Sign Up</legend>
          <label htmlFor="username">Username:</label>
          <input type="text" id='username' ref={userRef} /><br /><br />
          <label htmlFor="password">Password:</label>
          <input type="text" id='password' ref={passRef} /><br /><br />
          <button onClick={handleSubmit}>Submit</button>
        </fieldset>
      </form>
    </div>
  )
}

export default App