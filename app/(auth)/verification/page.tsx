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
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MoveLeftIcon } from 'lucide-react'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import { subSeconds, format } from 'date-fns'

export default function VerificationCode() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  })

  return (
    <Form {...form}>
      <Card className="py-12" asChild>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Verify your identity</CardTitle>
            <CardDescription className="text-sm">
              Please enter the 6 digits one-time verification code sent to your email.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <FormField
              control={form.control}
              name="pin"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputOTP containerClassName="w-fit mx-auto" maxLength={6} {...field}>
                      <InputOTPGroup>
                        {Array.from({ length: 6 }).map((_, index) => (
                          <InputOTPSlot key={index} index={index} />
                        ))}
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage />
                  <div className="flex items-center justify-between text-sm">
                    <p>
                      Resend Code in:{' '}
                      <time ref={timerRefInit(3)} className="font-bold">
                        {/* Placeholder Init in once second before */}
                        02:59 min
                      </time>
                    </p>
                    <Button variant="link" asChild>
                      <Link href="/verification-code">Resend Code</Link>
                    </Button>
                  </div>
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex-col gap-4">
            <Button type="submit" className="w-full font-medium">
              Verify
            </Button>

            <Button variant="link" asChild>
              <Link className="space-x-2" href="/forgot">
                <MoveLeftIcon />
                Forgot your password?
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

  function timerRefInit(min: number) {
    const currentDate = new Date(0)
    currentDate.setMinutes(min)

    return (node: HTMLTimeElement) => {
      if (!node) return

      let i = 0
      const timer = setInterval(() => {
        if (i === 3 * 60) return
        node.innerText = format(subSeconds(currentDate, ++i), "mm:ss 'min")
      }, 1 * 1000)

      return () => {
        clearInterval(timer)
      }
    }
  }
}
