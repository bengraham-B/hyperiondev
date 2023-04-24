import { Poppins } from 'next/font/google'
import Header from './components/Header'
import './globals.css'

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: 'GOOSE_CPT NextJS 13',
  description: 'Learning NextJS 12',
  author: 'GOOSE_CPT',
  keywords: 'web dev, tutorial, next13, nextjs, js, javascript, html, css'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      	<body className={poppins.className}>
          <Header/>
          <main className="container">
            {children}
          </main>
      	</body>
    </html>
  )
}
