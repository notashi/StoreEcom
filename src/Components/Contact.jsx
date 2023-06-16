import React from 'react'
//import HeroSection from '../Newcomps/HeroSection'
import styled from "styled-components"

const Contact = () => {

  const Wrapper = styled.section`
  h2{
    color : white
    
  }
    padding: 9rem 0 5rem 0;
    text-align: center;
    .container {
      margin-top: 6rem;
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
<h2>Contact Page</h2>
<iframe
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241158.9340462253!2d72.9352499271266!3d19.19046961266577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b93ff3767073%3A0xf6d76606e3b61dda!2sNIKE!5e0!3m2!1sen!2sin!4v1686053761469!5m2!1sen!2sin" 
 width="100%" 
 height="450" 
 style={{border:0}} 
 allowFullScreen="" 
 loading="lazy" 
 referrerPolicy="no-referrer-when-downgrade">
</iframe>
<div className="container">
<div className='contact-form'>
  <form action='#' method='#' className='contact-inputs'>
    <input 
    type='text' 
    placeholder='username'
     name='username'
     required
     autoComplete='off'
    //  onKeyUp={(event) => {
    //   event.target.value = event.target.value.toLowerCase().toUpperCase();
    // }}
     
     />
    <input type="email" name="email" placeholder='Email required'
    required
    autoComplete='off' 
    /> 

    <textarea name='Messgae'
    cols={30}
    rows={10}
    autoComplete='off'
    placeholder='Enter your message'>

    </textarea>
    <input type="submit" value="send" />
  </form>
</div>

</div>

    </Wrapper>
  )
}
export default Contact