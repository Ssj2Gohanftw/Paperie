"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const questions = [
  {
    question: "Do you offer custom invitation designs?",
    answer:
      "Yes, we offer fully custom designs tailored to your event and preferences.",
  },
  {
    question: "What is your turnaround time?",
    answer:
      "Our typical turnaround time is 2-3 weeks, but rush orders may be available.",
  },
  {
    question: "Can I request revisions?",
    answer:
      "Absolutely! We offer a limited number of revisions to ensure you are completely satisfied.",
  },
  {
    question: "Do you provide envelope and seal options?",
    answer:
      "Yes, we have a wide selection of envelopes, seals, and other complementary stationery.",
  },
  {
    question: "How do I place an order?",
    answer:
      "You can place your order through our website or contact us directly for a consultation.",
  },
  {
    question: "Is there a design consultation fee?",
    answer:
      "We offer a free initial consultation to discuss your design needs and ideas.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods including credit cards, PayPal, and bank transfers.",
  },
  {
    question: "Can you design stationery for other events?",
    answer:
      "Yes, we design for weddings, birthdays, corporate events, and more.",
  },
  {
    question: "Do you offer delivery services?",
    answer:
      "Yes, we provide delivery services within select regions. Please contact us for details.",
  },
  {
    question: "How can I get in touch with you?",
    answer:
      "You can reach us via our contact form, email, or phone. All details are available on our website.",
  },
];
const Questions = () => {
  return (
    <div className="p-6">
      <h1 className="flex flex-col items-center justify-center text-center text-4xl font-semibold  mb-6">
        Frequently Asked Questions
      </h1>
      <Accordion type="single" collapsible>
        {questions.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-2xl">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-1xl">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
export default Questions;
