const Button = ({label, color, padding}) => {
    const style = { 
      color, 
      padding 
    }
   
    return (
      <button style={style}>{label}</button>
    )
  }

  export const logger = () => {
      return console.log('soy logger')
  }

  export default Button