"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-custom min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <Image
          src="/images/about.jpg"
          alt="Finance Team"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
        <div className="absolute inset-0 bg-blue-500 bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            About Us
          </h1>
        </div>
      </section>

      {/* About Description */}
      <section className="max-w-5xl mx-auto py-12 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Empowering Your Financial Future
        </h2>
        <p className="text-gray-600 text-lg">
          We are a passionate team committed to making personal finance simple,
          intuitive, and impactful. Our platform is built for everyday users
          looking to gain control over their expenses, savings, and future
          goals.
        </p>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h3 className="text-xl font-semibold mb-6 text-center">
          Meet the Team
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              name: "Ashani Dewmini",
              role: "Founder & Developer",
              img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80",
            },
            {
              name: "John Smith",
              role: "UI/UX Designer",
              img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80",
            },
            {
              name: "Emily Johnson",
              role: "Marketing Specialist",
              img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
            },
          ].map((member, idx) => (
            <div
              key={idx}
              className="bg-blue-50 rounded-2xl shadow-md p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-blue-300"
            >
              <div className="relative w-28 h-28 mb-4">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover border-4 border-blue-300 shadow-lg"
                />
              </div>
              <h4 className="text-xl font-semibold text-blue-900">
                {member.name}
              </h4>
              <p className="text-sm text-blue-600 mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
