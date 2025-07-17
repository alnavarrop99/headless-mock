'use client'

import {
  BadgeCheckIcon,
  BellIcon,
  BlocksIcon,
  CreditCardIcon,
  DatabaseIcon,
  FolderIcon,
  HomeIcon,
  LayersIcon,
  LogOutIcon,
  MessageCircleQuestionIcon,
  SearchIcon,
  Settings2Icon,
  SparklesIcon,
  Trash2Icon,
} from 'lucide-react'

import { NavFavorites } from './nav-favorites'
import { NavMain } from './nav-main'
import { NavSecondary } from './nav-secondary'
import { NavWorkspaces } from './nav-workspaces'
import { NavUser } from './nav-user'
import { NavTitle } from './nav-title'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'
import GapIOBrand from '@/components/icons/gapio-brand'
import { NavContentModel } from './nav-content-model'
import { Badge } from '@/components/ui/badge'

// This is sample data.
const data = {
  title: {
    title: 'GapIA',
    description: 'Headless CMS',
    url: '/',
    icon: GapIOBrand,
  },
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navUser: [
    [
      {
        title: 'Upgrade to Pro',
        url: '/pricing',
        icon: SparklesIcon,
      },
    ],
    [
      {
        title: 'Account',
        url: '/account',
        icon: BadgeCheckIcon,
      },
      {
        title: 'Billing',
        url: '/billing',
        icon: CreditCardIcon,
      },
      {
        title: 'Notifications',
        url: '/notifications',
        icon: BellIcon,
      },
    ],
    [
      {
        title: 'Log out',
        url: '/logout',
        icon: LogOutIcon,
      },
    ],
  ],
  navMain: [
    {
      title: 'Ask AI',
      url: '/ia',
      icon: SparklesIcon,
    },
    {
      title: 'Search',
      url: '/search',
      icon: SearchIcon,
    },
    {
      title: 'Dashboard',
      url: '/',
      icon: HomeIcon,
    },
  ],
  navContentModel: [
    {
      title: 'Pages',
      url: '/pages',
      icon: LayersIcon,
    },
    {
      title: 'Globals',
      url: '/globals',
      icon: DatabaseIcon,
    },
    {
      title: 'Sections',
      url: '/sections',
      icon: FolderIcon,
      badge: <Badge className="aspect-square rounded-full p-1">4</Badge>,
    },
  ],
  navSecondary: [
    {
      title: 'Settings',
      url: '/settings',
      icon: Settings2Icon,
    },
    {
      title: 'Templates',
      url: '/templates',
      icon: BlocksIcon,
    },
    {
      title: 'Trash',
      url: '/trash',
      icon: Trash2Icon,
    },
    {
      title: 'Help',
      url: '/docs',
      icon: MessageCircleQuestionIcon,
      badge: <Badge className="aspect-square rounded-full p-1">2</Badge>,
    },
  ],
  favorites: [
    {
      name: 'Project Management & Task Tracking',
      url: '#',
      emoji: '📊',
    },
    {
      name: 'Family Recipe Collection & Meal Planning',
      url: '#',
      emoji: '🍳',
    },
    {
      name: 'Fitness Tracker & Workout Routines',
      url: '#',
      emoji: '💪',
    },
    {
      name: 'Book Notes & Reading List',
      url: '#',
      emoji: '📚',
    },
    {
      name: 'Sustainable Gardening Tips & Plant Care',
      url: '#',
      emoji: '🌱',
    },
    {
      name: 'Language Learning Progress & Resources',
      url: '#',
      emoji: '🗣️',
    },
    {
      name: 'Home Renovation Ideas & Budget Tracker',
      url: '#',
      emoji: '🏠',
    },
    {
      name: 'Personal Finance & Investment Portfolio',
      url: '#',
      emoji: '💰',
    },
    {
      name: 'Movie & TV Show Watchlist with Reviews',
      url: '#',
      emoji: '🎬',
    },
    {
      name: 'Daily Habit Tracker & Goal Setting',
      url: '#',
      emoji: '✅',
    },
  ],
  workspaces: [
    {
      name: 'Personal Life Management',
      emoji: '🏠',
      pages: [
        {
          name: 'Daily Journal & Reflection',
          url: '#',
          emoji: '📔',
        },
        {
          name: 'Health & Wellness Tracker',
          url: '#',
          emoji: '🍏',
        },
        {
          name: 'Personal Growth & Learning Goals',
          url: '#',
          emoji: '🌟',
        },
      ],
    },
    {
      name: 'Professional Development',
      emoji: '💼',
      pages: [
        {
          name: 'Career Objectives & Milestones',
          url: '#',
          emoji: '🎯',
        },
        {
          name: 'Skill Acquisition & Training Log',
          url: '#',
          emoji: '🧠',
        },
        {
          name: 'Networking Contacts & Events',
          url: '#',
          emoji: '🤝',
        },
      ],
    },
    {
      name: 'Creative Projects',
      emoji: '🎨',
      pages: [
        {
          name: 'Writing Ideas & Story Outlines',
          url: '#',
          emoji: '✍️',
        },
        {
          name: 'Art & Design Portfolio',
          url: '#',
          emoji: '🖼️',
        },
        {
          name: 'Music Composition & Practice Log',
          url: '#',
          emoji: '🎵',
        },
      ],
    },
    {
      name: 'Home Management',
      emoji: '🏡',
      pages: [
        {
          name: 'Household Budget & Expense Tracking',
          url: '#',
          emoji: '💰',
        },
        {
          name: 'Home Maintenance Schedule & Tasks',
          url: '#',
          emoji: '🔧',
        },
        {
          name: 'Family Calendar & Event Planning',
          url: '#',
          emoji: '📅',
        },
      ],
    },
    {
      name: 'Travel & Adventure',
      emoji: '🧳',
      pages: [
        {
          name: 'Trip Planning & Itineraries',
          url: '#',
          emoji: '🗺️',
        },
        {
          name: 'Travel Bucket List & Inspiration',
          url: '#',
          emoji: '🌎',
        },
        {
          name: 'Travel Journal & Photo Gallery',
          url: '#',
          emoji: '📸',
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <NavTitle value={data.title} />
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavContentModel items={data.navContentModel} />
        <NavFavorites favorites={data.favorites} />
        <NavWorkspaces workspaces={data.workspaces} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarRail />
      <SidebarFooter>
        <NavUser user={data.user} items={data.navUser} />
      </SidebarFooter>
    </Sidebar>
  )
}
