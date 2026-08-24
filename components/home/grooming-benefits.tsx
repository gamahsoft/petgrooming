import { Bath, Brush, HeartPulse, Sparkles } from 'lucide-react'

const benefits = [
  {
    icon: HeartPulse,
    title: 'Healthier skin and coat',
    text: 'Regular grooming helps spot irritation, matting, overgrown nails, and coat changes before they become bigger problems.',
  },
  {
    icon: Brush,
    title: 'Fewer tangles and mats',
    text: 'Routine brushing and trimming keep coats easier to manage, especially for curly, double-coated, and long-haired breeds.',
  },
  {
    icon: Bath,
    title: 'Cleaner, calmer baths',
    text: 'Baths remove dirt, dander, loose hair, and everyday buildup so your dog feels fresher and the coat dries with a softer finish.',
  },
  {
    icon: Sparkles,
    title: 'A tidier home',
    text: 'Consistent coat care can reduce loose shedding around the house and keeps your dog more comfortable between appointments.',
  },
]

export function GroomingBenefits() {
  return (
    <section className="bg-secondary/55 py-16">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Routine care
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Regular grooming keeps dogs healthier, cleaner, and more comfortable.
          </h2>
          <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
            Baths matter because clean skin and coat are the foundation for every good groom.
            They help remove odor-causing buildup, loosen shedding hair, and give every breed a
            better reset before styling.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="rounded-lg border bg-background p-5">
              <benefit.icon className="h-6 w-6 text-accent" />
              <h3 className="mt-5 font-semibold">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
