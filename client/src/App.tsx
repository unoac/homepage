import { useState, useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import LinkCard from '@/components/LinkCard';
// import { Links } from '@/data/links.tsx';

interface Link {
  id: number;
  name: string;
  description: string;
  icon: string;
  href: string;
  target: string;
  href_console: string;
}

function App() {
  const [links, setLinks] = useState<Link[]>([]);

  useEffect(() => {
    const API_URL = '/api/links';
    const fetchLinks = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setLinks(data);
      } catch (err) {
        console.error('errrrrrr', err);
      }
    };
    fetchLinks();
  }, []);

  return (
    <>
      <MainLayout>
        <h1 className="mb-4 text-center text-4xl font-bold text-zinc-200">🏎️</h1>
        <div className="flex flex-col gap-3">
          {links.map((link) => (
            <a href={link.href} target="_blank" key={link.id}>
              <LinkCard className="transition hover:bg-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8">
                    <div className="flex *:h-full *:w-full">
                      <img src={`/icons/48-${link.icon}.svg`} alt={link.name} />
                    </div>
                  </div>
                  <div className="w-full flex-1">
                    <h3 className="font-semibold">{link.name}</h3>
                    <p className="text-xs text-zinc-400">{link.description}</p>
                  </div>
                  {/* <div>
                    {link.href_console ? (
                      <>
                        <a href={link.href_console} target="_blank">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="#000000"
                            className="fill-zinc-300 hover:fill-zinc-100"
                            viewBox="0 0 256 256"
                          >
                            <path d="M126,128a6,6,0,0,1-2.25,4.69l-40,32a6,6,0,0,1-7.5-9.38L110.4,128,76.25,100.69a6,6,0,1,1,7.5-9.38l40,32A6,6,0,0,1,126,128Zm50,26H136a6,6,0,0,0,0,12h40a6,6,0,0,0,0-12Zm54-98V200a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V56A14,14,0,0,1,40,42H216A14,14,0,0,1,230,56Zm-12,0a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V200a2,2,0,0,0,2,2H216a2,2,0,0,0,2-2Z"></path>
                          </svg>
                        </a>
                      </>
                    ) : null}
                  </div> */}
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
