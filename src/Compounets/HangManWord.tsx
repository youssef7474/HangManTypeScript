type HangManwordProps={
  gussedLetters:string[]
  wordToguess:string,
  viewTheWord?:boolean
}


const HangManWord = ({viewTheWord=false ,gussedLetters,wordToguess}:HangManwordProps) => {
  return (
    <div style={{display:"flex",gap:".25em",fontSize:"6rem",fontWeight:"bold",textTransform:"uppercase",fontFamily:"monospace"}}>
      {
        wordToguess.split("").map((el,index)=>(
          <span style={{borderBottom:".1em solid black"}} key={index}>
            <span style={{visibility:gussedLetters.includes(el) || viewTheWord?"visible":"hidden",color:!gussedLetters.includes(el) &&viewTheWord?"red":"black"}}>
            {el}
            </span>
          </span>
        ))
      }
        
    </div>
  )
}

export default HangManWord
