function MainLayout(props: { children: React.ReactNode}) {
  return (
    <>
      <main className="bg-zinc-950 min-h-dvh w-full flex items-center justify-center text-white text-sm">
        <div className="max-w-xl p-4 m-auto w-full">
          {props.children}
        </div>
      </main>
    </>
  );
}

export default MainLayout;