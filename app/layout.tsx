import './globals.css'
export const metadata = { title: 'Vidara - صناعة الفيديو بالذكاء الاصطناعي' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
