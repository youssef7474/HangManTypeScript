import styles from "./KeyBoard.module.css"

type keyBoardProps={
  activeLetters:string[],
  inactiveLetters:string[],
  addGussedLetters:(letter:string)=>void,
  disabled?:boolean
}

const KeyBoard = ({ disabled=false,activeLetters,inactiveLetters,addGussedLetters}:keyBoardProps) => {
  const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]
  return (
    <div style={{ display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
    gap: ".5rem",}}>
      
      {
        KEYS.map((el)=>{
          const isActive=activeLetters.includes(el)
          const isInActive=inactiveLetters.includes(el)
          return(
            <button 

            onClick={()=>addGussedLetters(el)}
             className={`${styles.btn} ${isActive ?styles.active:""} ${isInActive?styles.inactive:""} `} key={el}
             disabled={isActive||isInActive||disabled}
             >{el}</button>
          )
        })
      }
    </div>
  )
}

export default KeyBoard
