function Letter({ word }: { word: string }) {
  return (
    <div className="whitespace-nowrap overflow-hidden w-20">
      <div className="paragraf uppercase border-b-2 border-gray-950 pb-1 w-fit animate-run">
        {[1, 2, 3, 4].map((index) => (
          <span key={index}>{word}</span>
        ))}
      </div>
    </div>
  );
}

export default Letter;
