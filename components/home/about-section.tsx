import { HeartHandshake, Scissors, ShieldCheck } from 'lucide-react'

const values = [
  {
    icon: HeartHandshake,
    title: 'Low-stress handling',
    text: 'We pace each groom around your dog’s comfort, coat condition, and temperament.',
  },
  {
    icon: Scissors,
    title: 'Coat-aware styling',
    text: 'Specializing in all breeds, every trim is guided by lifestyle, season, and your preferred finish.',
  },
  {
    icon: ShieldCheck,
    title: 'Clean salon standards',
    text: 'Sanitized tools, fresh towels, and clear communication from drop-off to pickup.',
  },
]

export function AboutSection() {
  return (
    <section className="section-shell py-16">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Why locals book</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            A polished salon experience without the chaos.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="rounded-lg border bg-card p-5">
              <value.icon className="h-6 w-6 text-accent" />
              <h3 className="mt-5 font-semibold">{value.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
