import HeroBanner from "@/components/ui/hero-banner";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section with Background Image */}
      <div className="relative h-[70vh] w-full">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about/01.jpg"
            alt="Paperie About Us Background"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          {/* Dark overlay for text contrast */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Us</h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl">
            Discover our passion for exquisite design and unmatched quality.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Paperie, we are obsessed with great designs and impeccable quality to create the best experience for our customers. Our journey began with a simple idea: to transform everyday paper products into extraordinary works of art that bring joy and elegance to life's special moments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            <div>
              <Image 
                src="/images/about/02.jpg" 
                alt="Paperie workshop" 
                width={600} 
                height={400} 
                className="rounded-lg shadow-lg"
                priority
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Crafted with Love</h3>
              <p className="text-gray-700 mb-6">
                Founded in 2018, Paperie has grown from a small home studio to a beloved brand known for its attention to detail and commitment to quality. Every product that leaves our workshop is crafted with care, using only the finest materials sourced from sustainable suppliers.
              </p>
              <p className="text-gray-700">
                Our design team draws inspiration from nature, architecture, and timeless elegance to create stationery that stands out. We believe that paper products should not only be functional but also serve as keepsakes that capture memories for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Passion</h3>
              <p className="text-gray-600">
                We pour our hearts into every design, ensuring each product reflects our love for beautiful stationery.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-gray-600">
                We never compromise on materials or craftsmanship, ensuring longevity and beauty in everything we create.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to eco-friendly practices, using responsibly sourced papers and minimizing our environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meet Our Team</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image 
                  src="/images/about/03.jpg" 
                  alt="Emma Johnson - Founder" 
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Emma Johnson</h3>
              <p className="text-gray-600">Founder & Creative Director</p>
            </div>
            
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image 
                  src="/images/about/04.jpg" 
                  alt="Michael Chen - Design Lead" 
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Michael Chen</h3>
              <p className="text-gray-600">Design Lead</p>
            </div>
            
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image 
                  src="/images/about/05.jpg" 
                  alt="Sophia Rivera - Production Manager" 
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Sophia Rivera</h3>
              <p className="text-gray-600">Production Manager</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Create Something Beautiful Together</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Whether you're planning a wedding, a special event, or looking for unique stationery, we'd love to hear from you.
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-8 rounded-md transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;