import "./globals.css";
import NavBar from "./components/NavBar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gradient-to-b from-[#0b0b10] via-[#111827] to-[#0b0b10] text-white">
        <NavBar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}