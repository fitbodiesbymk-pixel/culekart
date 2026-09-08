import Link from "next/link";
import InstagramFeed from "@/components/InstagramFeed";

const series = [
  {
    title: "Fuji-san",
    description:
      "Fun, cheerful and vibrant interpretations of Japan's holy mountain.",
    color: "bg-rose-100",
  },
  {
    title: "Abstract Collections",
    description:
      "Paintings combining colour, floral motifs and small bubbles of joy.",
    color: "bg-amber-50",
  },
  {
    title: "Alphabet Illustrations",
    description:
      "Bespoke name designs — a personal piece of art for someone special.",
    color: "bg-stone-100",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[88vh] flex flex-col items-center justify-center text-center px-6 py-24">
        <p className="text-xs tracking-[0.3em] uppercase text-rose-400 mb-6">
          Sharon Culek
        </p>
        <h1 className="font-heading text-5xl md:text-7xl text-stone-900 leading-tight max-w-3xl mb-6">
          Inspired by travel
        </h1>
        <p className="text-xl md:text-2xl text-stone-400 font-light italic max-w-xl mb-12">
          where the sketchbook is a girl's best friend
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="/portfolio"
            className="bg-rose-400 text-white px-8 py-3 text-xs tracking-widest uppercase hover:bg-rose-500 transition-colors"
          >
            View Portfolio
          </Link>
          <Link
            href="/commissions"
            className="border border-stone-300 text-stone-600 px-8 py-3 text-xs tracking-widest uppercase hover:border-rose-400 hover:text-rose-400 transition-colors"
          >
            Commissions
          </Link>
        </div>
      </section>

      {/* Series preview */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-rose-400 text-center mb-3">
            The Work
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-center text-stone-900 mb-16">
            Three distinct series
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {series.map((s) => (
              <div key={s.title}>
                <div
                  className={`${s.color} aspect-square mb-5 flex items-center justify-center text-stone-300 text-sm`}
                >
                  Artwork placeholder
                </div>
                <h3 className="font-heading text-xl text-stone-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-4">
                  {s.description}
                </p>
                <Link
                  href="/portfolio"
                  className="text-xs tracking-widest uppercase text-rose-400 hover:text-rose-500 transition-colors"
                >
                  See the series →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram feed */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-rose-400 mb-3">
                Latest work
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-stone-900">
                From the studio
              </h2>
            </div>
            <a
              href="https://www.instagram.com/culekart"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase text-stone-500 hover:text-rose-400 transition-colors self-start md:self-auto"
            >
              @culekart on Instagram →
            </a>
          </div>
          <InstagramFeed />
        </div>
      </section>

      {/* Commission CTA */}
      <section className="py-20 px-6 bg-rose-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-stone-900 mb-4">
            Looking for something bespoke?
          </h2>
          <p className="text-stone-500 mb-8 leading-relaxed">
            Sharon takes on commissioned work — from personal alphabet pieces to
            original travel paintings. Get in touch to discuss what you have in
            mind.
          </p>
          <Link
            href="/commissions"
            className="inline-block bg-rose-400 text-white px-10 py-4 text-xs tracking-widest uppercase hover:bg-rose-500 transition-colors"
          >
            Enquire Now
          </Link>
        </div>
      </section>
    </>
  );
}
