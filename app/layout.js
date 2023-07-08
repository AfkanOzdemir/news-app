import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Navbar from './components/navbar'
import './globals.css'
export const metadata = {
  title: 'Afkan Haber',
  description: 'Afkan Haber | En iyi haberler',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <body className='w-full h-[100vh] flex overflow-hidden'>
          <Navbar />
          <main className='w-[95%] h-full'>
            {children}
          </main>
        </body>
      </SkeletonTheme>
    </html>
  )
}
