const Button = ({func}) => {
  console.log(func)
    return (
      <button onClick={() => console.log('click')}>Incrementar</button>
    )
  }

  export default Button