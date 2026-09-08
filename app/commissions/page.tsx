"use client";
import { useState } from "react";

const steps = [
  {
    step: "01",
    title: "Get in touch",
    desc: "Fill in the form with your idea. The more detail the better — references, sizes, and occasions all help.",
  },
  {
    step: "02",
    title: "Initial conversation",
    desc: "Sharon will get back to you to discuss your vision, timeline, and pricing before anything is agreed.",
  },
  {
    step: "03",
    title: "Creation",
    desc: "Once agreed, Sharon gets to work. You'll receive updates throughout the process.",
  },
  {
    step: "04",
    title: "Delivery",
    desc: "Your finished piece is carefully packaged and delivered to you.",
  },
];

export default function CommissionsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <p className="text-xs tracking-[0.3em] uppercase text-rose-400 mb-4">
          Get in touch
        </p>
        <h1 className="font-heading text-5xl text-stone-900 mb-6">
          Commissions
        </h1>
        <p className="text-stone-500 max-w-xl mx-auto leading-relaxed">
          Sharon welcomes commission enquiries. Whether you're after a bespoke
          alphabet piece, a travel painting, or something entirely your own —
          get in touch and she'll be happy to discuss what's possible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Process */}
        <div>
          <h2 className="font-heading text-2xl text-stone-900 mb-8">
            What to expect
          </h2>
          <div className="space-y-8">
            {steps.map(({ step, title, desc }) => (
              <div key={step} className="flex gap-5">
                <span className="font-heading text-rose-300 text-2xl leading-none shrink-0">
                  {step}
                </span>
                <div>
                  <h3 className="text-stone-800 font-medium mb-1">{title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div>
          {submitted ? (
            <div className="bg-rose-50 p-10 text-center h-full flex flex-col items-center justify-center">
              <h2 className="font-heading text-2xl text-stone-900 mb-3">
                Thank you!
              </h2>
              <p className="text-stone-500">
                Sharon will be in touch soon to discuss your commission.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs tracking-widest uppercase text-stone-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border border-stone-200 px-4 py-3 text-stone-900 focus:outline-none focus:border-rose-400 bg-white"
                />
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-stone-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border border-stone-200 px-4 py-3 text-stone-900 focus:outline-none focus:border-rose-400 bg-white"
                />
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-stone-400 mb-2">
                  Type of commission
                </label>
                <select
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({ ...formData, type: e.target.value })
                  }
                  className="w-full border border-stone-200 px-4 py-3 text-stone-900 focus:outline-none focus:border-rose-400 bg-white"
                >
                  <option value="">Select...</option>
                  <option value="alphabet">Alphabet illustration</option>
                  <option value="fuji">Fuji-san painting</option>
                  <option value="abstract">Abstract painting</option>
                  <option value="other">Other / not sure</option>
                </select>
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-stone-400 mb-2">
                  Tell Sharon about your idea
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full border border-stone-200 px-4 py-3 text-stone-900 focus:outline-none focus:border-rose-400 bg-white resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-rose-400 text-white py-4 text-xs tracking-widest uppercase hover:bg-rose-500 transition-colors cursor-pointer"
              >
                Send Enquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
