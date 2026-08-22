import { ContactSection } from '@/components/contact-section'
import { buildPageMetadata } from '@/lib/seo'

export const metadata = buildPageMetadata({
  title: 'Contact Upland Pet Grooming',
  description:
    'Contact Upland Pet Grooming for salon hours, location, phone number, and dog grooming appointment questions.',
  path: '/contact',
})

export default function ContactPage() {
  return <ContactSection />
}
