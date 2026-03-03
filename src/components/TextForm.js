import React, { useState } from 'react'

const TextForm = (props) => {
const[text, setText] = useState("")

const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("convert into uppercase", "success");
    
}

  const handleCopy = () => {
    var text = document.getElementById("myBox")
    text.select();
     navigator.clipboard.writeText(text.value);
     document.getSelection().removeAllRanges();
     props.showAlert(" copy your text", "success");

  };

    const handleCut = () => {
    var text = document.getElementById("myBox")
     text.select();
     navigator.clipboard.writeText(text.value);
    setText(" ");
    props.showAlert("cut your text", "success");
  };


    const handleLwClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("convert into Lowercase", "success");
    
}

    const handleClClick = () => {
    let newText = "" ;
    setText(newText);
    props.showAlert("clear your text", "success");
    
}

    const handleRemoveExtSpace = () => {
    let newText = text.split(/[ ] + /) ;
    setText(newText.join(" "));
    props.showAlert("remove your extra space ", "success");
    
}

    const handleCmClick = () => {
    function toTitleCase(str) {
    return str
.toLowerCase()
.split(" ")
.map(word => word.charAt(0).toUpperCase() + word.slice(1))
.join(" ");
}
    setText(toTitleCase);
    props.showAlert("convert into Camelcase", "success");
    
}

    const handleOnChange = (event) => {
    setText(event.target.value);
}

const myStyle = {
    border: "4px solid grey",
    textAlign: "center"
}
  return (
    <>
  
    <div className='container' style={{color: props.mode === `dark` ? `white` : `#042743`}}> 
        <h1 style={myStyle}>there are {text.split(" ").filter((element)=> {return element.length!==0}).length} word and {text.length} characters</h1>
   <h2>{props.heading}</h2>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === `dark`?`#13464e`:`white`,
    color:props.mode === `dark` ? `white` : `#042743`
}} id="myBox" rows="10"></textarea>
</div>
<button disabled ={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert UpperCase</button>
<button disabled ={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLwClick}>Convert lowerCase</button>
<button disabled ={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClClick}>Clear Box</button>
<button disabled ={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCmClick}>Camel case</button>
<button disabled ={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleRemoveExtSpace}>Remove extra Spaces</button>
<button disabled ={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>copy text</button>
<button disabled ={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCut}>Cut text</button>
{/* <button disabled ={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlePaste}>Paste text</button> */}

</div>
<div className="container my-4 " style={{color: props.mode === `dark` ? `white` : `#042743`}}>
    <h1>Your Text Summery</h1>
    <p>{text.split(/\s+/).filter((element)=> {return element.length!==0}).length} word and {text.length} characters</p>
    <p> you read in  { 0.008 * text.split(" ").filter((element)=> {return element.length!==0}).length} minute</p>
    <h2>preview</h2>
    <p>{text}</p>
</div>
 
</>
  )
} 

export default TextForm
