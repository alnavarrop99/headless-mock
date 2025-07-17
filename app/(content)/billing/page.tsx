'use client'

import { useState } from 'react'
import { CreditCard, Download, Plus, Settings, Wallet } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export default function BillingPage() {
  const credits = 1250
  const [selectedCreditAmount, setSelectedCreditAmount] = useState('100')

  const creditPackages = [
    { amount: '100', price: 10, bonus: 0 },
    { amount: '500', price: 45, bonus: 50 },
    { amount: '1000', price: 80, bonus: 150 },
    { amount: '2500', price: 180, bonus: 500 },
  ]

  const billingHistory = [
    {
      id: 'INV-001',
      date: '2025-01-15',
      amount: '$29.00',
      status: 'Paid',
      description: 'Professional Plan - January 2025',
    },
    {
      id: 'INV-002',
      date: '2024-12-15',
      amount: '$29.00',
      status: 'Paid',
      description: 'Professional Plan - December 2024',
    },
    {
      id: 'INV-003',
      date: '2024-11-15',
      amount: '$29.00',
      status: 'Paid',
      description: 'Professional Plan - November 2024',
    },
    {
      id: 'INV-004',
      date: '2024-10-20',
      amount: '$45.00',
      status: 'Paid',
      description: 'Credit Purchase - 500 Credits',
    },
  ]

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Billing & Account</h1>
        <p className="text-muted-foreground">
          Manage your subscription, payment methods, and billing information
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="payment-methods">Payment Methods</TabsTrigger>
          <TabsTrigger value="billing-history">Billing History</TabsTrigger>
          <TabsTrigger value="account-settings">Account Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Current Plan */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Current Plan</CardTitle>
                <Settings className="text-muted-foreground h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Professional</div>
                <p className="text-muted-foreground text-xs">$29/month</p>
                <div className="mt-4">
                  <Badge variant="outline">Active</Badge>
                </div>
                <Button variant="outline" size="sm" className="mt-4 w-full bg-transparent">
                  Change Plan
                </Button>
              </CardContent>
            </Card>

            {/* Credits Balance */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Credits Balance</CardTitle>
                <Wallet className="text-muted-foreground h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{credits.toLocaleString()}</div>
                <p className="text-muted-foreground text-xs">Available credits</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm" className="mt-4 w-full">
                      Buy Credits
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Purchase Credits</DialogTitle>
                      <DialogDescription>
                        Choose a credit package to add to your account
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        {creditPackages.map(pkg => (
                          <Card
                            key={pkg.amount}
                            className={`cursor-pointer transition-colors ${
                              selectedCreditAmount === pkg.amount ? 'border-primary' : ''
                            }`}
                            onClick={() => setSelectedCreditAmount(pkg.amount)}
                          >
                            <CardContent className="p-4 text-center">
                              <div className="text-lg font-bold">{pkg.amount}</div>
                              <div className="text-muted-foreground text-sm">credits</div>
                              <div className="mt-2 text-lg font-semibold">${pkg.price}</div>
                              {pkg.bonus > 0 && (
                                <Badge variant="secondary" className="mt-1 text-xs">
                                  +{pkg.bonus} bonus
                                </Badge>
                              )}
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                    <DialogFooter>
                      <Button className="w-full">
                        Purchase {selectedCreditAmount} Credits - $
                        {creditPackages.find(p => p.amount === selectedCreditAmount)?.price}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* Next Billing */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Next Billing</CardTitle>
                <CreditCard className="text-muted-foreground h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Feb 15</div>
                <p className="text-muted-foreground text-xs">2025 - $29.00</p>
                <div className="mt-4">
                  <Badge variant="outline" className="text-green-600">
                    Auto-renewal enabled
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Usage Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Usage This Month</CardTitle>
              <CardDescription>Your current usage and limits</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>API Calls</span>
                    <span>8,450 / 100,000</span>
                  </div>
                  <div className="bg-secondary h-2 w-full rounded-full">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '8.45%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>Storage Used</span>
                    <span>2.3 GB / 50 GB</span>
                  </div>
                  <div className="bg-secondary h-2 w-full rounded-full">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '4.6%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>Team Members</span>
                    <span>3 / 10</span>
                  </div>
                  <div className="bg-secondary h-2 w-full rounded-full">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payment-methods" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Manage your payment methods and billing preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="flex items-center space-x-4">
                  <CreditCard className="h-8 w-8" />
                  <div>
                    <p className="font-medium">•••• •••• •••• 4242</p>
                    <p className="text-muted-foreground text-sm">Expires 12/27</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge>Default</Badge>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </div>
              </div>
              <Button variant="outline" className="w-full bg-transparent">
                <Plus className="mr-2 h-4 w-4" />
                Add Payment Method
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing-history" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Billing History</CardTitle>
              <CardDescription>View and download your past invoices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {billingHistory.map(invoice => (
                  <div
                    key={invoice.id}
                    className="flex items-center justify-between rounded-lg border p-4"
                  >
                    <div>
                      <p className="font-medium">{invoice.description}</p>
                      <p className="text-muted-foreground text-sm">
                        {invoice.date} • {invoice.id}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="font-medium">{invoice.amount}</p>
                        <Badge variant={invoice.status === 'Paid' ? 'default' : 'secondary'}>
                          {invoice.status}
                        </Badge>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="account-settings" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>Update your account details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" defaultValue="Acme Corp" />
                </div>
                <Button>Save Changes</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Billing Address</CardTitle>
                <CardDescription>Update your billing information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="address">Street Address</Label>
                  <Input id="address" defaultValue="123 Main Street" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" defaultValue="New York" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Select defaultValue="ny">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ny">New York</SelectItem>
                        <SelectItem value="ca">California</SelectItem>
                        <SelectItem value="tx">Texas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="zip">ZIP Code</Label>
                    <Input id="zip" defaultValue="10001" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Select defaultValue="us">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button>Update Address</Button>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Billing Preferences</CardTitle>
              <CardDescription>Configure your billing and notification settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Invoices</p>
                  <p className="text-muted-foreground text-sm">Receive invoices via email</p>
                </div>
                <Button variant="outline" size="sm">
                  Enabled
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Auto-renewal</p>
                  <p className="text-muted-foreground text-sm">Automatically renew subscription</p>
                </div>
                <Button variant="outline" size="sm">
                  Enabled
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Usage Alerts</p>
                  <p className="text-muted-foreground text-sm">
                    Get notified when approaching limits
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Enabled
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
