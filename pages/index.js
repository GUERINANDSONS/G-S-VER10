import dynamic from 'next/dynamic';
const Scheduler = dynamic(() => import('../components/SchedulerApp'), { ssr: false });

export default function Home() {
  return (
    <main>
      <h1>Custom Home Scheduler</h1>
      <Scheduler />
    </main>
  );
}
