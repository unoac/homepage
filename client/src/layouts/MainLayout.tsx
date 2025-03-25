function MainLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex min-h-dvh w-full items-center justify-center bg-zinc-950 text-sm text-white">
        <div className="m-auto w-full max-w-xl p-4">{props.children}</div>
      </main>
    </>
  );
}

export default MainLayout;
