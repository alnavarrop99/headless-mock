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
import { MoveLeftIcon } from 'lucide-react'

export default function ForgotPassword() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  })

  return (
    <Form {...form}>
      <Card className="py-12" asChild>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Forgot password?</CardTitle>
            <CardDescription className="text-sm">
              Enter the email address associated with your account and we&aposll send you a link to
              reset your password.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex-col gap-4">
            <Button type="submit" className="w-full font-medium">
              Send Reset Email
            </Button>

            <Button variant="link" asChild>
              <Link className="space-x-2" href="/login">
                <MoveLeftIcon />
                Go back to Log in
              </Link>
            </Button>
          </CardFooter>
        </form>
      </Card>
    </Form>
  )

  function handleSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
}
