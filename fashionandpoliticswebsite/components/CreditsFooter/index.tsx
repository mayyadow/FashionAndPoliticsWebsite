type ImageCredit = {
  source: string;
};

export function CreditsFooter({ credits }: { credits?: ImageCredit[] }) {
  if (!credits?.length) return null;

  return (
    <footer
      className="mb-0 pb-0 mt-15 text-left text-[9px] text-gray-500 w-screen"
      style={{ fontFamily: "HelveticaWorld, Helvetica,  Arial, sans-serif" }}
    >
      <hr className="border-gray-400 border-[0.1px] mb-3 w-full" />

      <div className="px-4">
        <p>imgs:</p>

        <ul>
          {credits.map((c) => (
            <li key={c.source}>{c.source}</li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
