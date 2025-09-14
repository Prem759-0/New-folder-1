# Overview

This is a modern messaging platform called "Beam" that combines instant chat and video calling functionality. Built as a Telegram/YouTube clone, it provides seamless real-time communication with features like direct messaging, group chats, and video calls. The application focuses on delivering a clean, responsive user experience with authentication, user management, and comprehensive chat capabilities.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: Next.js 15 with App Router for modern React-based development
- **UI Components**: Shadcn/ui component library with Radix UI primitives for consistent, accessible design
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **State Management**: React hooks and context for local state, Stream Chat React for chat state
- **Authentication**: Clerk for user authentication with built-in sign-in/sign-up flows

## Backend Architecture
- **Database**: Convex for real-time database operations with automatic syncing
- **API Layer**: Convex functions for queries and mutations, replacing traditional REST/GraphQL
- **Server Actions**: Next.js server actions for secure server-side operations like token generation
- **Middleware**: Clerk middleware for route protection and authentication validation

## Real-time Communication
- **Chat System**: Stream Chat SDK for messaging functionality with channels, threads, and message history
- **Video Calling**: Stream Video SDK for high-quality video/audio calls with built-in controls
- **Token Management**: Server-side token generation for secure Stream service authentication

## Data Architecture
- **User Management**: Convex schema with user synchronization between Clerk and Stream services
- **Chat Channels**: Stream handles channel creation, membership, and message persistence
- **Search**: Debounced user search with Convex queries for finding and adding chat participants

## UI/UX Patterns
- **Layout System**: Sidebar navigation with collapsible design for desktop and mobile
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Loading States**: Consistent spinner components and loading indicators throughout the app
- **Error Handling**: Status cards and error boundaries for graceful failure handling

# External Dependencies

## Authentication & User Management
- **Clerk**: Complete authentication solution with social logins, user profiles, and session management
- **Integration**: Automatic user sync between Clerk and internal user database

## Real-time Services
- **Stream Chat**: Comprehensive chat infrastructure with channels, messaging, and moderation
- **Stream Video**: Video calling platform with WebRTC, call controls, and participant management
- **Convex**: Real-time database with automatic synchronization and optimistic updates

## Development Tools
- **Shadcn/ui**: Pre-built component library with consistent design system
- **Lucide React**: Icon library for consistent iconography
- **TypeScript**: Full type safety across frontend and backend
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens

## Infrastructure
- **Vercel**: Deployment platform optimized for Next.js applications
- **Environment Variables**: Secure configuration for API keys and service endpoints
- **Image Optimization**: Next.js image optimization with remote pattern support for user avatars