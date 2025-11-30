import emailjs from '@emailjs/browser'
import { logButtonClick } from '@/shared/analytics/analytics'
import { FC, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { toast } from 'sonner'

export const ContactForm: FC = () => {
  const { t } = useTranslation();
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
    logButtonClick('contact_form_submit')

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        title: t("contact.form.titleContactForm"),
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
      toast.success(t("contact.form.successMessage"))

      setForm({ name: '', email: '', message: '' })
    }, (error) => {
      setLoading(false)
      toast.error(t("contact.form.errorMessage"))
      console.error(error)
    })
  }
  
  return (
    <form 
        ref={formRef} 
        onSubmit={handleSubmit} 
        className="mt-12 flex flex-col gap-8"
        aria-label={t("contact.form.ariaLabelForm")}
    >
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">{t("contact.form.yourName")}</span>
          <input 
            type="text" 
            name="name" 
            value={form.name} 
            onChange={handleChange} 
            placeholder={t("contact.form.placeholderName")}
            required
            aria-required="true"
            className="bg-green-100/10 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" 
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">{t("contact.form.yourEmail")}</span>
          <input 
            type="email" 
            name="email" 
            value={form.email} 
            onChange={handleChange} 
            placeholder={t("contact.form.placeholderEmail")}
            required
            aria-required="true"
            className="bg-green-100/10 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" 
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">{t("contact.form.yourMessage")}</span>
          <textarea 
            rows={7}
            name="message" 
            value={form.message} 
            onChange={(e) => setForm({ ...form, message: e.target.value })} 
            placeholder={t("contact.form.placeholderMessage")}
            required
            aria-required="true"
            className="bg-green-100/10 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none" 
          />
        </label>

        <div className="flex justify-center">
          <button 
            type="submit" 
            disabled={loading}
            {...(loading ? { "aria-busy": "true" } : { "aria-busy": "false" })}
            className="bg-green-200/40 py-3 px-8 outline-none w-fit text-white font-bold shadow-sm shadow-green-200/40 rounded-xl cursor-pointer 
                    disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 ease-in-out hover:bg-green-200/60 hover:shadow-sm hover:shadow-green-200/60"
          >
            {loading ? t("contact.form.sending") : t("contact.form.send")}
          </button>
        </div>
    </form>
  )
}