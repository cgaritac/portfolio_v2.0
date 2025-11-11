import { Toaster as SonnerToaster } from 'sonner'
import { FC } from 'react'

export const Toaster: FC = () => {
  return (
    <SonnerToaster 
        richColors 
        position="bottom-right" 
        duration={10000} 
        expand={true}
        closeButton={true}
    />
  )
}