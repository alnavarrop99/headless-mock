import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'
import { format } from 'date-fns'

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for our website and services',
}

export default function PrivacyPolicy() {
  const lastUpdate = Date.now()
  return (
    <div className="container mx-auto space-y-8 px-6 py-8">
      <div>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/" className="flex items-center">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <Button variant="outline" asChild>
          <Link href="/terms-of-service">View Terms of Service</Link>
        </Button>
      </div>

      <div className="bg-card rounded-lg border p-6">
        <time
          dateTime={format(lastUpdate, 'P')}
          className="text-muted-foreground mb-6 block text-right text-sm"
        >
          Last updated: {format(lastUpdate, "LLLL dd',' yyyy")}
        </time>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-medium">1. Introduction</h2>
          <p className="mb-4">
            Welcome to our Privacy Policy. This document explains how we collect, use, and protect
            your personal information when you use our services.
          </p>
          <p>
            By accessing or using our services, you agree to the collection and use of information
            in accordance with this policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-medium">2. Information We Collect</h2>
          <p className="mb-4">
            We may collect several different types of information for various purposes to provide
            and improve our service to you:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Personal Data: While using our service, we may ask you to provide us with certain
              personally identifiable information that can be used to contact or identify you.
            </li>
            <li>
              Usage Data: We may also collect information on how the service is accessed and used.
            </li>
            <li>
              Cookies Data: We use cookies and similar tracking technologies to track activity on
              our service and hold certain information.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-medium">3. How We Use Your Information</h2>
          <p className="mb-4">We use the collected data for various purposes:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>To provide and maintain our service</li>
            <li>To notify you about changes to our service</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our service</li>
            <li>To monitor the usage of our service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-medium">4. Data Security</h2>
          <p>
            The security of your data is important to us, but remember that no method of
            transmission over the Internet or method of electronic storage is 100% secure. While we
            strive to use commercially acceptable means to protect your personal data, we cannot
            guarantee its absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-medium">5. Third-Party Services</h2>
          <p>
            We may employ third-party companies and individuals to facilitate our service, provide
            the service on our behalf, perform service-related services, or assist us in analyzing
            how our service is used. These third parties have access to your personal data only to
            perform these tasks on our behalf and are obligated not to disclose or use it for any
            other purpose.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-medium">6. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by
            posting the new Privacy Policy on this page. You are advised to review this Privacy
            Policy periodically for any changes.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-medium">7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at
            privacy@example.com.
          </p>
        </section>
      </div>

      <div className="text-muted-foreground text-center text-sm">
        <p>© {new Date().getFullYear()} GapIA. All rights reserved.</p>
      </div>
    </div>
  )
}
