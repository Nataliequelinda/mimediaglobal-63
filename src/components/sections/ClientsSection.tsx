
const ClientsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-muted-foreground">Trusted Partners</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-16">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
              <div className="h-6 md:h-8 flex items-center">
                <img
                  src={`https://source.unsplash.com/random/200x80?logo,minimal&${item}`}
                  alt={`Client ${item}`}
                  className="h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
