export const Hello = (props) => {
    const name = props.name
    const age = props.age
    const bornYear = () => {
        const yearNow = new Date().getFullYear()
        return yearNow - age
      }
    return (
      <div className="Hello">
        <p>
          Hello {name}, you are {age} years old
        </p>
        <p>So you were probably born in {bornYear()}</p>
      </div>
    );
  }

export const bornYear = (props) => {
    const name = props.name
    const age = props.age
    const bornYear = () => {
        const yearNow = new Date().getFullYear()
        return yearNow - props.age
      }
  
    return (
      <div>
        <p>Hello {name}, you are {age} years old</p>
        <p>So you were probably born in {bornYear()}</p>
      </div>
    )
}



export default Hello