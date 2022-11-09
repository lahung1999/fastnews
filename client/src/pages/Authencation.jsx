/* eslint-disable no-undef */
import React, {useEffect} from 'react'
import './aaaa.css'

const Authencation = () => {

    let faceioInstance = null
    useEffect(() => {
        const script = document.createElement('script')
        script.src = '//cdn.faceio.net/fio.js'
        script.async = true
        script.onload = () => loaded()
        document.body.appendChild(script)
        return () => {
            document.body.removeChild(script)
        }
        }, [ ])
        const loaded = () => {
        console.log(faceIO)
        if (faceIO && !faceioInstance) {
            faceioInstance = new faceIO('fioa1b98')
        }
    }

    const faceRegistration = async () => {
      try {
        const userInfo = await faceioInstance.enroll({
          locale: "auto",
          payload: {
            email: "laviethung280699@gmail.com",
            userId: 28061999,
            username: "laviethung99",
          },
        })
        console.log(userInfo)
        console.log('Unique Facial ID: ', userInfo.facialId)
        console.log('Enrollment Date: ', userInfo.timestamp)
        console.log('Gender: ', userInfo.details.gender)
        console.log('Age Approximation: ', userInfo.details.age)
      } catch (errorCode) {
        console.log(errorCode)
        // handleError(errorCode)
      }
    }

    const faceSignIn = async () => {
      try {
        console.log(faceioInstance)
        const userData = await faceioInstance.authenticate({
          locale: "auto",
        })
        console.log(userData)
    
        console.log('Unique Facial ID: ', userData.facialId)
        console.log('PayLoad: ', userData.payload)
      } catch (errorCode) {
        console.log(errorCode)
        // handleError(errorCode)
      }
    }

  return (
        <div className="face-authentication-by-trungquandev flex fdc jcfc aic">
          <h1>Face Authentication using ReactJS & FaceIO</h1>
          <button className="action face-registration" onClick={faceRegistration}>Face Registration</button>
          <button className="action face-sign-in" onClick={faceSignIn}>Face Sign In</button>
      
          <div className="trungquandev-author">
            <div className="flex aic gap-10 mb-7 author">
              <img className="icon basis-10" alt="trungquandev" src="https://trungquandev.com/wp-content/uploads/2022/09/trungquandev-account-icon-80-80.png" />
              <span className="basis-20">Author:</span>
              <div className="basis-70">Trung Quân (aka Trungquandev)</div>
            </div>
            <div className="flex aic gap-10 mb-7 blog">
              <img className="icon basis-10" alt="trungquandev" src="https://trungquandev.com/wp-content/uploads/2021/05/logo-trungquandev-transparent-bg-192x192-1.png" />
              <span className="basis-20">Blog:</span>
              <div className="basis-70"><a href="https://trungquandev.com" target="_blank" rel="noopener noreferrer">https://trungquandev.com</a></div>
            </div>
            <div className="flex aic gap-10 mb-7 cv">
              <img className="icon basis-10" alt="trungquandev" src="https://trungquandev.com/wp-content/uploads/2022/09/trungquandev-resume-icon-80-80.png" />
              <span className="basis-20">CV:</span>
              <div className="basis-70"><a href="https://cv.trungquandev.com" target="_blank" rel="noopener noreferrer">https://cv.trungquandev.com</a></div>
            </div>
            <div className="flex aic gap-10 mb-7 youtube">
              <img className="icon basis-10" alt="trungquandev" src="https://trungquandev.com/wp-content/uploads/2022/09/trungquandev-youtube-icon-96-96.png" />
              <span className="basis-20">YouTube:</span>
              <div className="basis-70"><a href="https://www.youtube.com/c/TrungquandevOfficial" target="_blank" rel="noopener noreferrer">Trungquandev Official</a></div>
            </div>
            <div className="flex aic gap-10 mb-7 facebook">
              <img className="icon basis-10" alt="trungquandev" src="https://trungquandev.com/wp-content/uploads/2022/09/trungquandev-facebook-icon-96-96.png" />
              <span className="basis-20">Facebook:</span>
              <div className="basis-70"><a href="https://facebook.com/trungquandev" target="_blank" rel="noopener noreferrer">Trung Quân Dev</a></div>
            </div>
            <div className="flex aic gap-10 mb-7 refer-link">
              <img className="icon basis-10" alt="trungquandev" src="https://trungquandev.com/wp-content/uploads/2022/09/trungquandev-link-icon-94-94.png" />
              <span className="basis-20">FaceIO:</span>
              <div className="basis-70"><a href="https://faceio.net/" target="_blank" rel="noopener noreferrer">https://faceio.net</a></div>
            </div>
          </div>
        </div>
      
  )
}

export default Authencation