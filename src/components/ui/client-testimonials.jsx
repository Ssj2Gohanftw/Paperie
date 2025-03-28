const Testimonials = () => {
    const description =
      "Ratisha's eye for great design made our wedding cards stand out. She's amazing";
    return (
      <div className="px-4 py-8">
        <h1 className="text-[rgba(173,163,150,1)] text-3xl sm:text-4xl md:text-5xl text-center mb-4">
          Testimonials from Our Clients
        </h1>
        <p className="text-[rgba(173,163,150,1)] text-4xl sm:text-5xl md:text-6xl lg:text-8xl px-4 pb-4 text-center">
          &quot;{description}&quot;
        </p>
      </div>
    );
  };
  
  export default Testimonials;
  