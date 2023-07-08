import Navbar from './components/navbar'
import './globals.css'
import 'react-loading-skeleton/dist/skeleton.css'
export const metadata = {
  title: 'Afkan Haber',
  description: 'Afkan Haber | En iyi haberler',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='w-full h-[100vh] flex overflow-hidden'>
        <Navbar />
        <main className='w-[95%] h-full'>
          {children}
        </main>
      </body>
    </html>
  )
}
