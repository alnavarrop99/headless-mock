import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface Plan {
  id: string
  title: string
  description: string
  price: number
  features: string[]
  href: string
  highlight: boolean
}

export default function PricingSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto w-full max-w-2xl px-6 lg:max-w-7xl">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl/tight font-semibold tracking-tight sm:text-4xl/tight">
            Simple, transparent pricing
          </h2>
          <p className="text-muted-foreground mt-4 text-base/7 sm:text-lg/8">
            Aliquet adipiscing lectus praesent cras sed quis lectus egestas.
          </p>
        </div>

        <div className="mx-auto mt-12 grid gap-8 py-6 lg:grid-cols-3 lg:[&:has(>*:hover)>*:not(:hover)]:opacity-60 lg:[&:has(>*:hover:first-child)>*:not(:hover)]:rotate-12 lg:[&:has(>*:hover:last-child)>*:not(:hover)]:-rotate-12">
          {plans.map(plan => (
            <Card
              key={plan.id}
              className={cn(
                'hover:scale-105 hover:ring-2 lg:hover:z-30 lg:hover:scale-110 lg:hover:rotate-0 lg:first:hover:left-1/3 lg:last:hover:right-1/3',
                'lg:first:top-12 lg:first:left-12 lg:first:z-0 lg:first:-rotate-12 lg:last:top-12 lg:last:right-12 lg:last:z-0 lg:last:rotate-12',
                'group ring-primary relative ring-0 transition-all duration-300 sm:px-6 sm:!py-12 lg:z-10'
              )}
            >
              {plan.highlight && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-lg">{plan.title}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div>
                  <span className="text-4xl font-bold sm:text-5xl">${plan.price}</span>
                  <span className="text-muted-foreground ml-1">/ month</span>
                </div>
                <ul className="mt-6 space-y-4 text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-muted-foreground flex items-center">
                      <svg
                        className="mr-4 h-4 w-4 text-green-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  size="lg"
                  className="w-full"
                  asChild
                  variant={plan.highlight ? 'default' : 'outline'}
                >
                  <a href={plan.href}>Purchase {plan.title}</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const plans: Plan[] = [
  {
    id: 'starter',
    title: 'Starter',
    description: 'For hobby projects and personal websites',
    price: 5,
    features: [
      'Basic components',
      'Use in 1 project',
      'Access to community forum',
      'Detailed documentation',
      'Regular updates',
    ],
    href: '/billing',
    highlight: false,
  },
  {
    id: 'pro',
    title: 'Professional',
    description: 'For freelancers and individual developers',
    price: 16,
    features: [
      'Everything in Starter plan',
      'All components + future updates',
      'Use in unlimited projects',
      'Email support',
      'Figma design files',
    ],
    href: '/billing',
    highlight: true,
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    description: 'For growing teams and businesses',
    price: 79,
    features: [
      'Everything in Pro plan',
      '5 team seats included',
      'Team management dashboard',
      'Advanced analytics',
      'Priority email support',
    ],
    href: '/billing',
    highlight: false,
  },
]
