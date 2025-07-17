'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { formSchema } from './schema'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  })

  return (
    <Form {...form}>
      <Card className="py-12" asChild>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Hi there!</CardTitle>
            <CardDescription className="text-sm">Sign in to your PaaS account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="user@gapia.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between text-sm">
                    <FormLabel>Password</FormLabel>
                    <Button variant="link" asChild>
                      <Link href="/forgot">Forgot your password?</Link>
                    </Button>
                  </div>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full font-medium">
              Login
            </Button>
          </CardFooter>
        </form>
      </Card>
      <p className="text-center text-sm text-balance [&>a]:hover:underline">
        By clicking continue, you agree to our <Link href="terms-of-service">Terms of Service</Link>{' '}
        and <Link href="privacy-policy">Privacy Policy</Link>
      </p>
    </Form>
  )

  function handleSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
}
