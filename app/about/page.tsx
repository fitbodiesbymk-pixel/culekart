import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        {/* Portrait */}
        <div className="relative w-full aspect-square md:aspect-[4/5] overflow-hidden rounded-sm">
          <Image
            src="/culekart/sharon.jpg"
            alt="Sharon Culek — artist"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Text */}
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-rose-400 mb-4">
            About Sharon
          </p>
          <h1 className="font-heading text-3xl md:text-5xl text-stone-900 mb-8 leading-tight">
            A British artist,<br />living beautifully in Prague
          </h1>
          <div className="space-y-5 text-stone-600 leading-relaxed">
            <p>
              I am Sharon Culek and I live in Prague, Czech Republic. I often
              tell people I have lived here twice — a period of three years in
              the late 90s as my first job abroad, and then again since 2018.
              Living in such a beautiful city sparks its own creativity. It's
              impossible not to appreciate its architectural wonders and
              loveliness.
            </p>
            <p>
              Before Prague, I spent three years teaching in Yokohama, Japan —
              and it was there that my deep fascination with Mount Fuji began.
              Inspired by Hokusai's iconic series of 36 views of the sacred
              mountain, I set myself the challenge of creating 27 original
              interpretations of Fujisan: in oil, ink, mixed media, and digital.
              Each one a different mood, angle, season, and story.
            </p>
            <p>
              My influences stretch from the ukiyo-e printmakers of Japan to Van
              Gogh, Egon Schiele, Gustav Klimt, and the German Expressionists.
              Travel has always been at the heart of my work — the sketchbook
              comes everywhere, and the drawings find their way onto canvas
              months or years later.
            </p>
            <p>
              After 33 years in education — teaching art in Birmingham, Yokohama
              and Prague — I have stepped away from the classroom to paint full
              time. It is an uncomfortable and exciting place to be, and I
              wouldn't have it any other way.
            </p>
            <blockquote className="italic text-stone-400 font-light text-lg border-l-2 border-rose-300 pl-5 my-6">
              "Inspired by travel — where the sketchbook is a girl's best friend."
            </blockquote>
          </div>
        </div>
      </div>

      {/* Commissions callout */}
      <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-stone-100">
          <h2 className="font-heading text-2xl text-stone-900 mb-3">
            Bespoke commissions
          </h2>
          <p className="text-stone-600 leading-relaxed text-sm">
            Sharon's commissioned pieces are deeply personal. She works with
            clients to embed meaningful objects, colours, and memories into
            paintings — creating something that tells your story as much as
            hers. A dialogue is always at the heart of the process.
          </p>
        </div>
        <div className="p-8 bg-rose-50">
          <h2 className="font-heading text-2xl text-stone-900 mb-3">
            Fujisan Fixations — 2026
          </h2>
          <p className="text-stone-600 leading-relaxed text-sm">
            Sharon's first solo physical exhibition in Prague is planned for
            2026 — a celebration of her Fuji-san series and the journey that
            began in a hotel room in Yokohama, gazing at the sacred mountain
            at dawn.
          </p>
        </div>
      </div>
    </div>
  );
}
