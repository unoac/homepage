function LinkCard(props: { children?: React.ReactNode; className?: string }) {
  return (
    <>
      <div className={`rounded-lg bg-zinc-900 px-3 py-2 ${props.className}`}>{props.children}</div>
    </>
  );
}

export default LinkCard;
