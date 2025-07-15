"use client";

import Image from "next/image";

export default function WelcomeSection() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/welcomeimg.jpg" // 🖼️
        alt="Welcome background"
        fill
        className="object-cover opacity-80"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center text-center px-4">
        <div className="text-white max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Welcome to FinGuard
          </h2>
          <p className="text-lg md:text-xl font-light">
            Take control of your money, track your expenses, and build your
            future — all in one place.
          </p>
        </div>
      </div>
    </section>
  );
}
