"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import questions from "@/data/faqs/questions";
const Questions = () => {
  return (
    <div className="p-6">
      <h1 className="flex flex-col items-center justify-center text-center text-4xl font-semibold  mb-6">
        Frequently Asked Questions
      </h1>
      <Accordion type="single" collapsible>
        {questions.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-2xl font-bold hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-2xl">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
export default Questions;
