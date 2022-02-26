import React from 'react'
import { navigate } from 'gatsby'
import Recaptcha from 'react-google-recaptcha'

const ContactForm = () => {
  const [state, setState] = React.useState({})
  const recaptchaRef = React.createRef()
  const [buttonDisabled, setButtonDisabled] = React.useState(true)

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const recaptchaValue = recaptchaRef.current.getValue()

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        'g-recaptcha-response': recaptchaValue,
        ...state,
      }),
    })
    .then(() => navigate(form.getAttribute('action')))
    .catch(error => alert(error))
  }

  return (
    <form
      name="contact-us"
      method="POST"
      data-netlify="true"
      data-netlify-recaptcha="true"
      action="/thank-you"
      onSubmit={handleSubmit}
    >
      <noscript>
        <p>This form won’t work with Javascript disabled</p>
      </noscript>
      <div>
        <input
          type="text"
          id="text-input"
          name="name"
          onChange={handleChange}
          required
        />
        <label htmlFor="text-input">Name / Alias</label>
      </div>
      <div>
        <input
          id="email-input"
          type="email"
          name="email"
          placeholder=""
          onChange={handleChange}
          required
        />
        <label htmlFor="email-input">Email</label>
      </div>
      <div>
        <textarea
          id="textarea"
          type="text"
          name="message"
          onChange={handleChange}
          required
        />
        <label htmlFor="textarea">Message</label>
      </div>
      {/* Recaptcha */}
      <Recaptcha
        ref={recaptchaRef}
        sitekey={process.env.GATSBY_RECAPTCHA_KEY}
        size="normal"
        id="recaptcha-google"
        onChange={() => setButtonDisabled(false)}
      />
      <button type="submit" disabled={buttonDisabled}>Submit</button>
    </form>
  )
}

export default ContactForm
