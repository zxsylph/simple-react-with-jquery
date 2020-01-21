const {useState} = React

function Container(){
  const [data, setData] = useState('')
  const [input, setInput] = useState('')
  return (<div>
    <div>{data}</div>
    <input id='input' type='text' value={input} onChange={(e)=>{setInput(e.target.value)}} />
    <button onClick={()=>{
      setData(input)
      console.log($('#input').val())
    }}>Set Data</button>
  </div>)
}

ReactDOM.render(
  <Container></Container>,
  document.getElementById('reactRoot')
);