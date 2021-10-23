import {useEffect, useState,useRef} from 'react'
import './App.css';


function ToggleButton(){
const [toggleState, setToggleState]=useState(false)
const buttonBase = useRef(null)
const buttonCircle = useRef(null)

useEffect(()=>{
    const style={marginLeft:'55%',
      boxShadow:'0.5px 0.5px 2px #00A339'}

    if(toggleState){
      buttonCircle.current.classList.add('toggleOn')
      buttonBase.current.classList.add('toggleButtonBaseActive')
        }
    else{
      buttonCircle.current.classList.remove('toggleOn')
      buttonBase.current.classList.remove('toggleButtonBaseActive')
      }
  },[toggleState])

  return( <div   class='button' onClick={()=>setToggleState(!toggleState)}>
    <div className='toggleButtonBase' ref={buttonBase} >
      <div ref={buttonCircle} className='circle '></div>
    </div>
  </div>)
  }
  
  function Button(){
  return(
  <button>100</button>
  
  
  )
  }
  
  function Option({label,description,labelStyle}){
  return (
  <div className='flex space-between'>
  <div>
  <h4 className={`label ${labelStyle}`}>{label}</h4>
  <p className='description'>{description}</p>
  </div>
  <ToggleButton/>
  </div>)
  
  }
  
  function Options(){
  return ( <div>
  <Option label='Moderation' description='review al questions before go live'/>
  <Option label='Labels' description='Categorize and filter questions'/>
  <Option label='Downvotes' description='Enable downvoting of aquestion'/>
  <Option label='Replies' description='Allow participants to rely comments or questions'/>
  <Option label='Anonymous questions' description='Let your participants send anonymous questions'/>
  <Option label='Maximum question length' description='Show number of votes instead of percentage'/>
  <Option label='Close questions' description='Prevent the paarticipants from sending new questions to your event'/>
  </div>)
  }
  
  function OptionsContainer({children}){

    return(
      <div className='optionsTabOuter'>
        <button className='close'>x</button>
        <div className='optionsTab'>
        <Option label='Audience Q&A' labelStyle='optionsHeader' />
        <hr style={{marginTop:'25px'}}/>
        <div className='optionsContainer'>
        {children}
      </div>
      </div>
      
      </div>
    )
  }

  function MenuOption({label,active,refNum,setActiveState,}){
    function handleActiveState(refNum){
      const newArray= Array(7).fill('')
      setActiveState(newArray.map((ele,index)=> {
        return (index==refNum)
        ?'active':''
      }))

    }
    return(<div  className={`menuOption ${active}`} onClick={()=> handleActiveState(refNum)}>
      {label}
    </div>)
  }

  function OptionsMenu({children}){
    const StateRefArray=Array(7).fill('')
    const [activeState,setActiveState]=useState(StateRefArray)
    StateRefArray[2]='active'
    return(
      <div className='optionsMenu'>
        <div className='menubar'>
          <div >
            <p className='menuTitle'>Event Settings</p>
            <hr style={{margin:'20px 0'}}/>
          </div>
          <MenuOption label='General' active={activeState[0]} refNum='0' setActiveState={setActiveState} />
          <MenuOption label='Privacy' active={activeState[1]} refNum='1' setActiveState={setActiveState}/>
          <MenuOption label='Features' active={activeState[2]} refNum='2' setActiveState={setActiveState}/>
          <MenuOption label='Customization' active={activeState[3]} refNum='3' setActiveState={setActiveState}/>
          <MenuOption label='Integration' active={activeState[4]} refNum='4' setActiveState={setActiveState}/>
          <MenuOption label='Session Settings' active={activeState[5]} refNum='5' setActiveState={setActiveState}/>
          <MenuOption label='My plans' active={activeState[6]} refNum='6' setActiveState={setActiveState}/>
        </div>
        {children}
      </div>
    )
      

  }
  function App(){
  return (
    <OptionsMenu>
      <OptionsContainer>
    <Options/>
  </OptionsContainer>
    </OptionsMenu>
  )
  }
  

export default App;
