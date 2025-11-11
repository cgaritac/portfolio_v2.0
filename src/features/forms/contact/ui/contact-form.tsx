import { FC, useState, useRef } from "react"
import emailjs from '@emailjs/browser'
import { CONTACT_FORM_CONSTANTS } from "../constants"
import { toast } from 'sonner'

export const ContactForm: FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        title: CONTACT_FORM_CONSTANTS.TITLE_CONTACT_FORM,
        name: form.name,
        to_name: import.meta.env.VITE_EMAILJS_TO_NAME,
        email: form.email,
        to_email: import.meta.env.VITE_EMAILJS_TO_EMAIL,
        time: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
        message: form.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setLoading(false)
      toast.success(CONTACT_FORM_CONSTANTS.SUCCESS_MESSAGE)

      setForm({ name: '', email: '', message: '' })
    }, (error) => {
      setLoading(false)
      toast.error(CONTACT_FORM_CONSTANTS.ERROR_MESSAGE)
      console.error(error)
    })
  }
  
  return (
    <form 
        ref={formRef} 
        onSubmit={handleSubmit} 
        className="mt-12 flex flex-col gap-8"
    >
        <label className="flex flex-col">
        <span className="text-white font-medium mb-4">{CONTACT_FORM_CONSTANTS.YOUR_NAME}</span>
        <input 
            type="text" 
            name="name" 
            value={form.name} 
            onChange={handleChange} 
            placeholder={CONTACT_FORM_CONSTANTS.PLACEHOLDER_NAME} 
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
        </label>
        <label className="flex flex-col">
        <span className="text-white font-medium mb-4">{CONTACT_FORM_CONSTANTS.YOUR_EMAIL}</span>
        <input 
            type="email" 
            name="email" 
            value={form.email} 
            onChange={handleChange} 
            placeholder={CONTACT_FORM_CONSTANTS.PLACEHOLDER_EMAIL} 
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
        </label>
        <label className="flex flex-col">
        <span className="text-white font-medium mb-4">{CONTACT_FORM_CONSTANTS.YOUR_MESSAGE}</span>
        <textarea 
            rows={7}
            name="message" 
            value={form.message} 
            onChange={(e) => setForm({ ...form, message: e.target.value })} 
            placeholder={CONTACT_FORM_CONSTANTS.PLACEHOLDER_MESSAGE} 
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none" />
        </label>

        <button 
        type="submit" 
        className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
        >
        {loading ? CONTACT_FORM_CONSTANTS.SENDING : CONTACT_FORM_CONSTANTS.SEND}
        </button>
    </form>
  )
}