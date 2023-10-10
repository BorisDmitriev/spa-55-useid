import {useId,useRef} from 'react'

export default function ContactForm() {

  const inputId = useId()
  const inputField = useRef(null)
  const buttonId = useId()


  const handler = () => {
    console.log(inputField.current.value)
  }

  return (
    <>
        <label htmlFor={inputId}></label>
        <input type="text" name="" id={inputId} ref={inputField}/>

        <label htmlFor={`${inputId}-name`}>Name</label>
        <input type="text" name="" id={`${inputId}-name`} placeholder='Name'/>

        <label htmlFor={`${inputId}-email`}>E-Mail</label>
        <input type="email" name="" id={`${inputId}-email`} placeholder='E-Mail' />

        <label htmlFor={`${inputId}-message`}>Message</label>
        <textarea type="email" name="" id={`${inputId}-message`} placeholder='Message'></textarea>

        <button id={buttonId} onClick={handler}>Click here!</button>
    </>
  )
}
