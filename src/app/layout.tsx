import type { Metadata } from "next"
import { Inter, Bricolage_Grotesque } from "next/font/google"
import "./globals.css"
import { Chatbot } from "@/components/ui/chatbot"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
})

const bricolage = Bricolage_Grotesque({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "VOID — Agence Web & IA",
  description: "VOID crée des sites web premium avec intelligence artificielle intégrée pour les entreprises ambitieuses.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} ${bricolage.variable} h-full antialiased`}>
      <body className="min-h-full">
        {children}
        <Chatbot />
      </body>
    </html>
  )
}
