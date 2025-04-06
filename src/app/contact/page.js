import ContactForm from "@/components/ui/contact/ContactForm";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background px-4 py-16 flex flex-col items-center">
      <div className="text-center max-w-2xl mb-10">
        <h1 className="text-5xl uppercase tracking-wide mb-4 font-[var(--font-cormorant-garamond)]">
          Contact
        </h1>
        <p className="text-lg">
          If you&apos;re interested in working with us, the best way to reach us
          is by filling out the form below. If this form doesn&apos;t suit your
          inquiry, please reach out to <br />
          <Link href="mailto:info@paperie.com" className="underline">
            info@paperie.com
          </Link>
        </p>
      </div>

      <ContactForm />
    </div>
  );
}
