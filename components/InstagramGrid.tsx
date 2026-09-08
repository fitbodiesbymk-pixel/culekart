import Image from "next/image";
import Link from "next/link";

const INSTAGRAM_URL = "https://www.instagram.com/culekart";

// Add screenshot filenames here as you drop them into /public/instagram/
const posts = [
  { src: "/culekart/instagram/post-1.jpg", alt: "Blossom tree painting by Sharon Culek" },
  { src: "/culekart/instagram/post-2.jpg", alt: "Forest painting by Sharon Culek" },
  { src: "/culekart/instagram/post-3.jpg", alt: "Landscape painting by Sharon Culek" },
];

export default function InstagramGrid() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-2">
        {posts.map((post) => (
          <a
            key={post.src}
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden bg-rose-50"
          >
            <Image
              src={post.src}
              alt={post.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
