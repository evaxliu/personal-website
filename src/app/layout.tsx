import "./globals.css";
import NavBar from "./components/NavBar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0b0b10] text-white h-screen overflow-hidden">
        <div className="h-full flex flex-col">
          <NavBar />
          <main className="flex-1 min-h-0">{children}</main>
        </div>
      </body>
    </html>
  );
}