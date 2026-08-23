import { FAQAccordion } from '@/components/faq-accordion'
import { BookingDialog } from '@/components/booking-dialog'
import { JsonLd } from '@/components/json-ld'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getServices } from '@/lib/cms'
import { buildPageMetadata, faqJsonLd } from '@/lib/seo'

export const metadata = buildPageMetadata({
  title: 'Dog Grooming Services & Pricing',
  description:
    'Compare bath and brush, full groom, and luxury spa dog grooming packages specializing in all breeds with starting prices by dog size.',
  path: '/services',
})

export const revalidate = 300

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="section-shell py-12 sm:py-16">
      <JsonLd data={faqJsonLd()} />
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Services & pricing
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Clear grooming packages specializing in all breeds, coat types, sizes, and comfort levels.
          </h1>
        </div>
        <BookingDialog />
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.slug} id={service.slug} className="scroll-mt-24 border-border/80">
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{service.summary}</p>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2 text-center text-sm sm:grid-cols-3">
                <div className="rounded-md bg-secondary p-3">
                  <p className="font-medium">Small</p>
                  <p>${service.smallDogPrice}+</p>
                </div>
                <div className="rounded-md bg-secondary p-3">
                  <p className="font-medium">Medium</p>
                  <p>${service.mediumDogPrice}+</p>
                </div>
                <div className="rounded-md bg-secondary p-3">
                  <p className="font-medium">Large</p>
                  <p>${service.largeDogPrice}+</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {service.includes.map((item) => (
                  <li key={item.item}>- {item.item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-14">
        <FAQAccordion />
      </div>
    </div>
  )
}
