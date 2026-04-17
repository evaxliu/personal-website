import LofiRoom from "@/app/components/LofiRoom";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl h-[85vh] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/10">
        <LofiRoom />
      </div>
    </main>
  );
}