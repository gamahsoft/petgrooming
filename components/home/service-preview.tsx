import Link from 'next/link'

import type { SiteService } from '@/lib/cms'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function ServicePreview({ services }: { services: SiteService[] }) {
  return (
    <section className="bg-white py-16">
      <div className="section-shell">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Popular services</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Choose the right level of care.
            </h2>
          </div>
          <Button asChild variant="outline">
            <Link href="/services">All services</Link>
          </Button>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.slug}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{service.summary}</p>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-semibold">${service.smallDogPrice}+</p>
                <p className="mt-1 text-sm text-muted-foreground">starting for small dogs</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
