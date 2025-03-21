function LinkCard(props: { children?: React.ReactNode; className?: string }) {
  return (
    <>
      <div className={`bg-zinc-900 rounded-lg py-2 px-4 ${props.className}`}>
        {props.children}
      </div>
    </>
  );
}

export default LinkCard;
