import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'How do prices change by dog size?',
    answer:
      'The listed prices are starting points. Final pricing depends on coat length, coat condition, temperament, and styling complexity.',
  },
  {
    question: 'Can I book online?',
    answer:
      'Yes. Every booking button opens the Square Appointments flow in a new secure tab so clients can pick an available service and time.',
  },
  {
    question: 'Do you groom anxious dogs?',
    answer:
      'Yes. Please mention anxiety, handling preferences, or medical considerations when booking so the groomer can plan extra time.',
  },
  {
    question: 'What vaccines are required?',
    answer:
      'Please bring current rabies documentation. Additional requirements can be confirmed before your appointment.',
  },
]

export function FAQAccordion() {
  return (
    <div className="mx-auto max-w-3xl">
      <h2 className="text-3xl font-semibold tracking-tight">Common questions</h2>
      <Accordion type="single" collapsible className="mt-5 rounded-lg border bg-card px-5">
        {faqs.map((faq, index) => (
          <AccordionItem key={faq.question} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
