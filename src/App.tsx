import MainLayout from "@/layouts/MainLayout";
import LinkCard from "@/components/LinkCard";
import Logo from '@/assets/48-AdGuard.svg';
import { Links } from '@/data/links.tsx';

function App() {
  return (
    <>
      <MainLayout>
        <h1 className="text-center mb-4 text-lg text-zinc-200 font-bold">🏎️</h1>
        <div className="flex flex-col gap-2">
        {Links.map((link) => (
          <a href={link.href} target="_blank">
            <LinkCard className="hover:bg-zinc-800 transition">
              <div className="flex gap-2 items-center">
                <div className="h-8 w-8 flex">
                  <div className="flex *:w-full *:h-full">
                    {link.icon}
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <h3 className="font-semibold">{link.name}</h3>
                  <p className="text-xs text-zinc-300">{link.description}</p>
                </div>
                <div>
                    <span>–</span>
                </div>
              </div> 
            </LinkCard>
          </a>
        ))}
        </div>
      </MainLayout>
    </>
  );
}

export default App;
