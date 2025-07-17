import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'
import { format } from 'date-fns'

export const metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for our website and services',
}

export default function TermsOfService() {
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
        <h1 className="text-3xl font-bold">Terms of Service</h1>
        <Button variant="outline" asChild>
          <Link href="/privacy-policy">View Privacy Policy</Link>
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
          <h2 className="mb-3 text-xl font-medium">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing or using our service, you agree to be bound by these Terms. If you disagree
            with any part of the terms, then you may not access the service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-medium">2. Use of Service</h2>
          <p className="mb-4">
            Our service is intended for your personal, non-commercial use unless otherwise
            specified. You agree not to use the service for any illegal purposes or in violation of
            any local, state, national, or international law.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-medium">3. User Accounts</h2>
          <p className="mb-4">
            When you create an account with us, you must provide information that is accurate,
            complete, and current at all times. Failure to do so constitutes a breach of the Terms,
            which may result in immediate termination of your account on our service.
          </p>
          <p>
            You are responsible for safeguarding the password that you use to access the service and
            for any activities or actions under your password.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-medium">4. Intellectual Property</h2>
          <p className="mb-4">
            The service and its original content, features, and functionality are and will remain
            the exclusive property of our company and its licensors. The service is protected by
            copyright, trademark, and other laws.
          </p>
          <p>
            Our trademarks and trade dress may not be used in connection with any product or service
            without the prior written consent of our company.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-medium">5. Termination</h2>
          <p className="mb-4">
            We may terminate or suspend your account immediately, without prior notice or liability,
            for any reason whatsoever, including without limitation if you breach the Terms.
          </p>
          <p>
            Upon termination, your right to use the service will immediately cease. If you wish to
            terminate your account, you may simply discontinue using the service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-medium">6. Limitation of Liability</h2>
          <p>
            In no event shall our company, nor its directors, employees, partners, agents,
            suppliers, or affiliates, be liable for any indirect, incidental, special, consequential
            or punitive damages, including without limitation, loss of profits, data, use, goodwill,
            or other intangible losses, resulting from your access to or use of or inability to
            access or use the service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-medium">7. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any
            time. If a revision is material, we will try to provide at least 30 days&apos notice
            prior to any new terms taking effect.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-medium">8. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at terms@example.com.
          </p>
        </section>
      </div>

      <div className="text-muted-foreground text-center text-sm">
        <p>© {new Date().getFullYear()} GapIA. All rights reserved.</p>
      </div>
    </div>
  )
}
