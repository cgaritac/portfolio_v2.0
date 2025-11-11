import { FC, useState, useRef } from "react"
import emailjs from '@emailjs/browser'

export const ContactForm: FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, /*setLoading*/] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  
  return (
    <form 
        ref={formRef} 
        onSubmit={handleSubmit} 
        className="mt-12 flex flex-col gap-8"
    >
        <label className="flex flex-col">
        <span className="text-white font-medium mb-4">Your Name</span>
        <input 
            type="text" 
            name="name" 
            value={form.name} 
            onChange={handleChange} 
            placeholder="What's your name?" 
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
        </label>
        <label className="flex flex-col">
        <span className="text-white font-medium mb-4">Your Email</span>
        <input 
            type="email" 
            name="email" 
            value={form.email} 
            onChange={handleChange} 
            placeholder="What's your email?" 
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
        </label>
        <label className="flex flex-col">
        <span className="text-white font-medium mb-4">Your Message</span>
        <textarea 
            rows={7}
            name="message" 
            value={form.message} 
            onChange={(e) => setForm({ ...form, message: e.target.value })} 
            placeholder="What do you want to say?" 
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none" />
        </label>

        <button 
        type="submit" 
        className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
        >
        {loading ? 'Sending...' : 'Send'}
        </button>
    </form>
  )
}