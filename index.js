const {useState, createRef} = React

function Container(){
  const [data, setData] = useState('')
  const [input, setInput] = useState('')
  const inputRef = createRef()
  return (<div>
    <div>{data}</div>
    <input ref={inputRef} id='input' type='text' value={input} onChange={(e)=>{setInput(e.target.value)}} />
    <button onClick={()=>{
      setData(input)
      console.log(inputRef.current.value)
    }}>Set Data</button>
  </div>)
}

ReactDOM.render(
  <Container></Container>,
  document.getElementById('reactRoot')
);