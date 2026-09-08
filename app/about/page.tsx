import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        {/* Portrait — full width on mobile, constrained on desktop */}
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
            A British artist,
            <br />
            living beautifully in Prague
          </h1>
          <div className="space-y-5 text-stone-600 leading-relaxed">
            <p>
              Sharon Culek is a British artist who has made her home in the
              beautiful city of Prague. Her work is shaped by a lifelong love of
              travel — every journey a source of colour, shape, and story.
            </p>
            <p>
              For Sharon, the sketchbook is never far away. It's her constant
              companion through markets and mountain paths, capturing the moments
              that eventually find their way onto canvas.
            </p>
            <p>
              Her work spans three distinct bodies: vivid interpretations of
              Japan's iconic Fuji-san, abstract paintings woven with floral
              motifs and colour, and bespoke alphabet illustrations crafted as
              personal pieces for people who want something truly unique.
            </p>
            <blockquote className="italic text-stone-400 font-light text-lg border-l-2 border-rose-300 pl-5 my-6">
              "Inspired by travel — where the sketchbook is a girl's best
              friend."
            </blockquote>
          </div>
        </div>
      </div>

      {/* Exhibition notice */}
      <div className="mt-16 md:mt-24 p-8 md:p-10 bg-rose-50 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-rose-400 mb-3">
          Upcoming
        </p>
        <h2 className="font-heading text-3xl text-stone-900 mb-4">
          Fujisan Fixations
        </h2>
        <p className="text-stone-500 max-w-xl mx-auto leading-relaxed">
          Sharon's first solo exhibition — a celebration of Mount Fuji through
          vibrant, joyful painting. Details to be announced in 2026.
        </p>
      </div>
    </div>
  );
}
