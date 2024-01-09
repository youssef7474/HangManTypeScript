type HangManDrawingProps ={
  numberOfGusses:number
}



const HangManDrawing = ({numberOfGusses}:HangManDrawingProps) => {


    const head=(
                    <div style={{width:"25px",height:"25px",borderRadius:"100%",position:"absolute",border:"10px solid black",top:"50px",right:"-18px"}}></div>
                )

    const body=(
            <div style={{width:"10px",height:"70px",position:"absolute",background:"black",top:"90px",right:"0"}}></div>
        )

    const rightArm=(
      <div style={{width:"70px",height:"10px",backgroundColor:"black",position:"absolute",top:"120px",right:"-70px",rotate:"-30deg",transformOrigin:"left bottom"}}></div>
    )    

    const LeftArm=(
      <div style={{width:"70px",height:"10px",backgroundColor:"black",position:"absolute",top:"120px",right:"10px",rotate:"30deg",transformOrigin:"right bottom"}}></div>

    )

    const rightLeg=(
      <div style={{width:"70px",height:"10px",backgroundColor:"black",position:"absolute",top:"150px",right:"-60px",rotate:"60deg",transformOrigin:"left bottom"}}></div>
    )

    const leftLeg=(
      <div style={{width:"70px",height:"10px",backgroundColor:"black",position:"absolute",top:"150px",right:"0",rotate:"-60deg",transformOrigin:"right bottom"}}></div>
    )

    const bodyParts=[head,body,rightArm,LeftArm,rightLeg,leftLeg]

  return (
    <div style={{position:"relative"}} >
      {
        bodyParts.slice(0,numberOfGusses)
      }
        <div style={{backgroundColor:"black",height:"50px",width:"10px",position:"absolute",top:"0",right:"0"}}></div>
        <div style={{backgroundColor:"black",height:"10px",width:"150px",marginLeft:"100px"}}></div>
        <div style={{height:"250px",width:"10px",backgroundColor:"black",marginLeft:"100px"}}></div>
        <div style={{height:"10px",width:"200px",backgroundColor:"black"}}></div>
    </div>
  )
}

export default HangManDrawing
