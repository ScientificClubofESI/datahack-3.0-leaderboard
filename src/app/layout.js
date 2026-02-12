import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'DATAHACK 3.0',
  description: 'Join us for an exciting data-focused hackathon',
  icons: {
    icon: '/images/datahack_logo.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#04080A]">
        <div 
          className="min-h-screen bg-black"
          style={{ 
            backgroundImage: 'url(/images/bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="min-h-screen bg-black/50">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}