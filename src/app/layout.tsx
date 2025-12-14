import "./globals.css";
import NavBar from "./components/NavBar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-svh overflow-hidden flex flex-col">
        <NavBar />
        {/* THIS wrapper gives pages the remaining height under the navbar */}
        <div className="flex-1 min-h-0 overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}