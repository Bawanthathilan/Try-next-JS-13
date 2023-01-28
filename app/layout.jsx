import { Montserrat } from '@next/font/google'
import './globals.css'

const montserrat = Montserrat({
  weights: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`${montserrat.className} mx-32 my-12`}>



        {children}</body>
    </html>
  )
}
