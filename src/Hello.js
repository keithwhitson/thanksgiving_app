export const Hello = (props) => {
    return (
      <div className="Hello">
        <p>
          Hello {props.name}, you are {props.age} years old
        </p>
      </div>
    );
  }

export const bornYear = (props) => {
    const { name, age } = props
    const bornYear = () => new Date().getFullYear() - age
  
    return (
      <div>
        <p>Hello {name}, you are {age} years old</p>
        <p>So you were probably born in {bornYear()}</p>
      </div>
    )
}



export default Hello