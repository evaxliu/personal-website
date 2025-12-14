import LofiRoom  from '@/app/components/LofiRoom';

export default function Home() {
  return (
    <main className="h-svh overflow-hidden">
      <div className="h-[calc(100svh-64px)] grid place-items-center">
        <div className="w-[min(1100px,92vw)] h-[min(700px,92svh)] overflow-hidden rounded-2xl">
          <LofiRoom />
        </div>
      </div>
    </main>
  );
}