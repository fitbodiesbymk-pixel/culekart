const series = [
  {
    id: "fuji-san",
    title: "Fuji-san Series",
    description:
      "Fun, cheerful and vibrant interpretations of Japan's most sacred mountain. These paintings capture the joy and energy of Fuji-san — bold colour, movement, and a sense of wonder.",
    works: [
      { title: "Fuji-san No. 1", color: "bg-rose-100" },
      { title: "Fuji-san No. 2", color: "bg-rose-200" },
      { title: "Fuji-san No. 3", color: "bg-pink-100" },
      { title: "Fuji-san No. 4", color: "bg-rose-50" },
    ],
  },
  {
    id: "abstract",
    title: "Abstract Collections",
    description:
      "Paintings that combine rich colour, floral motifs and small bubbles of joy. These abstracts are lively and layered — pieces that reward time and attention.",
    works: [
      { title: "Abstract No. 1", color: "bg-amber-50" },
      { title: "Abstract No. 2", color: "bg-orange-50" },
      { title: "Abstract No. 3", color: "bg-yellow-50" },
    ],
  },
  {
    id: "alphabet",
    title: "Alphabet Illustrations",
    description:
      "Bespoke name designs — a personal piece of art created for someone special. Each piece is one-of-a-kind, combining hand-lettering with Sharon's painterly style.",
    comingSoon: true,
    works: [
      { title: "Alphabet — S", color: "bg-stone-100" },
      { title: "Alphabet — M", color: "bg-stone-200" },
    ],
  },
];

export default function PortfolioPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-20">
        <p className="text-xs tracking-[0.3em] uppercase text-rose-400 mb-4">
          Work
        </p>
        <h1 className="font-heading text-5xl text-stone-900">Portfolio</h1>
      </div>

      <div className="space-y-24">
        {series.map((s) => (
          <section key={s.id}>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <h2 className="font-heading text-3xl text-stone-900 mb-2">
                  {s.title}
                </h2>
                <p className="text-stone-500 max-w-xl leading-relaxed text-sm">
                  {s.description}
                </p>
              </div>
              {s.comingSoon && (
                <span className="text-xs tracking-widest uppercase text-rose-400 border border-rose-200 px-3 py-1 self-start md:self-auto whitespace-nowrap">
                  More coming 2027
                </span>
              )}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {s.works.map((work) => (
                <div key={work.title}>
                  <div
                    className={`${work.color} aspect-square flex items-center justify-center text-stone-300 text-xs mb-2`}
                  >
                    Artwork
                  </div>
                  <p className="text-sm text-stone-500 font-light">
                    {work.title}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
