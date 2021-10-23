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
  
  function Button({value,className,setActiveState,refNum}){
    function handleActiveState(refNum){
      const newArray= Array(3).fill('')
      setActiveState(newArray.map((ele,index)=> {
        return (index==refNum)
        ?'active':''
      }))
    }
  return(
  <button className={className} onClick={()=>handleActiveState(refNum)}>{value}</button>
  
  
  )
  }
  
  function OptionWithIcon({label,description,labelStyle,icon}){
    return (
    <div className='flex space-between'>
    <div className='flex center '>
      {icon}
    <h4 className={`label ${labelStyle}`}>{label}</h4>
    </div>
    <ToggleButton/>
    </div>)
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

  function Buttons({children}){
    const activeRefArray=Array(3).fill('')
    const [activeState,setActiveState]=useState(activeRefArray)
    activeRefArray[2]='active'
    return(
      <div className='buttons'>
        <Button className={`small ${activeState[0]}`} value='100' setActiveState={setActiveState} refNum='0'/>
        <Button className={`small ${activeState[1]}`} value='240'  setActiveState={setActiveState} refNum='1'/>
        <Button  className={`small ${activeState[2]}`} value='300'  setActiveState={setActiveState} refNum='2'/>
      </div>
    )
  }
  
  function Options(){
  return ( <div>
  <Option label='Moderation' description='review al questions before go live'/>
  <Option label='Labels' description='Categorize and filter questions'/>
  <Option label='Downvotes' description='Enable downvoting of aquestion'/>
  <Option label='Replies' description='Allow participants to rely comments or questions'/>
  <Option label='Anonymous questions' description='Let your participants send anonymous questions'/>
  <Option label='Maximum question length' description='Show number of votes instead of percentage'/>
  <Buttons/>
  <Option label='Close questions' description='Prevent the paarticipants from sending new questions to your event'/>
  </div>)
  }
  
  function OptionsContainer({children}){

    return(
      <div className='optionsTabOuter'>
        <button className='close'>x</button>
        <div className='optionsTab'>
        <OptionWithIcon
        label='Audience Q&A' 
        labelStyle='optionsHeader' 
        icon={<img className='small-icon' src='./logo/chat2.png'/>} />
        <hr style={{marginTop:'25px'}}/>
        <div className='optionsContainer'>
        {children}
      </div>
      <Button className='active right' value='Save '/>
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

  function OptionsMenu(){
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
        <OptionsContainer>
          <Options/>
        </OptionsContainer>
      </div>
    )
      

  }


  function App(){
  return (
    <div >

      <aside className='left'>
      <img  src='./logo/logo.png' alt='events icon'/>

        <center className='icon-container'>
          <img className='icon' src='./logo/events.png' alt='events icon'/>
       <p>Event</p>
       </center>

       <center className='icon-container border'>
          <img className='icon' src='./logo/groups.png' alt='teams icon'/>
       <p>Teams</p>
       </center>

       <center className='icon-container '>
          <img className='icon' src='./logo/analysis.png' alt='teams icon'/>
       <p className='inactive'>Analytics</p>
       </center>
       <center className='icon-container '>
          <img className='icon' src='./logo/results.png' alt='teams icon'/>
       <p className='inactive'>Results</p>
       </center>
      </aside>
      <div className='workSpace'>
    <nav >

      <div className='container flex space-between'>
            <div className='flex center'>
          <img className='options' src='./logo/options.png' alt='teams icon'/>
              <h2>Admin Dashboard</h2>
              </div>

            <div className='flex center border'>
              <p className='inactive'>Preview on:</p>
              <div className='small-icon-container'>
                <img className='small-icons' src='./logo/laptop.jpg'/>
                </div>
                <div className='small-icon-container'>
                <img className='small-icons' src='./logo/mobile.png'/>
                </div>
            </div>

      </div>
    </nav>
    
    <OptionsMenu/>
    </div>
    <aside className='right'>
          <center className='profile-container '>
          <img className='profile' src='./logo/profile.jpg' alt='profile icon'/>
       </center>
    <center className='icon-container '>
          <img className='icon' src='./logo/notifications.png' alt='notifications icon'/>
       </center>
       <center className='icon-container '>
          <img className='icon' src='./logo/chat.png' alt='chat icon'/>
       </center>
       <center className='icon-container '>
          <img className='icon' src='./logo/settings.png' alt='settings icon'/>
       </center>
    </aside>
    </div>
  )
  }
  

export default App;
