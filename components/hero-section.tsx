export default function HeroSection() {
    return (
      <div className="relative h-[300px] md:h-[400px] bg-green-800 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/placeholder.svg?height=800&width=1600')" }}
        ></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Chheda Ayurvedic Medical Shop</h1>
          <p className="text-xl text-white max-w-2xl">
            Your trusted source for authentic Ayurvedic medicines and wellness products since 1975
          </p>
        </div>
      </div>
    )
  }
  