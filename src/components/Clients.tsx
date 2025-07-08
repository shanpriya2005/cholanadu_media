const clients = [
  { image: "/logos/britannia.png" },
 { image: "/logos/dabur.png" },
  { image: "/logos/img1.webp" },
  { image: "/logos/jagannath.jpeg" },
  { image: "/logos/MMjewellery.png" },
  { image: "/logos/MRF.png" },
  { image: "/logos/reliance.jpeg" },
   
  { image: "/logos/tata.png" },
  { image: "/logos/thaamarai.png" },
];

// Repeat for seamless marquee
const marqueeClients = [...clients, ...clients];

const Clients = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
          Trusted by Forward-Thinking Brands
        </h2>
        <p className="mt-4 text-lg italic text-black">
          We partner with ambitious companies to create amazing things.
        </p>

        {/* Scrolling logo row */}
        <div className="relative mt-16 overflow-hidden">
          <div className="flex w-max animate-marquee items-center">
            {marqueeClients.map((client, idx) => (
              <img
                key={idx}
                src={client.image}
                alt={`Client ${idx}`}
                className="h-24 object-contain"
                style={{ marginLeft: '2rem', marginRight: '2rem' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
