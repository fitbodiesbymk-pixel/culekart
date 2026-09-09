const series = [
  {
    id: "fuji-san",
    title: "Fuji-san Series",
    description:
      "27 original works inspired by three years living in Yokohama, Japan. Influenced by Hokusai's iconic 36 views of Mount Fuji, Sharon set herself the challenge of capturing the sacred mountain across oil, ink, mixed media and digital — each piece a different mood, angle, and story. Influences range from ukiyo-e printmakers to Van Gogh, Klimt, and the German Expressionists.",
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
      "Lively, layered paintings combining rich colour, floral motifs and what Sharon calls 'bubbles of joy' — a recurring motif that has found its way onto many canvases. Rooted in a love of Czech and Japanese landscapes, these pieces reward time and attention.",
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
      "Bespoke name designs — a personal piece of art created for someone special. Sharon works with each client to weave in meaningful colours, objects, and memories, making every piece a story as much as a painting.",
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
