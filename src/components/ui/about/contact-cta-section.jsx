import { Button } from "../button";
const ContactSection = () => {
  return (
    <section className="py-16 bg-pink-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let&apos;s Create Something Beautiful Together
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Whether you&apos;re planning a wedding, a special event, or looking
          for unique stationery, we&apos;d love to hear from you.
        </p>
        <Button className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-8 rounded-md transition-colors">
          Contact Us
        </Button>
      </div>
    </section>
  );
};
export default ContactSection;
