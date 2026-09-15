import { createRootRoute, HeadContent, Scripts, Outlet } from '@tanstack/react-router'
import type { ReactNode } from 'react'

export const Route = createRootRoute({
  head: () => ({ meta: [{ title: 'RealtorStickers — Your brand, everywhere' }] }),
  component: Root,
})

function Root() { return <RootDocument><Outlet /></RootDocument> }
function RootDocument({ children }: { children: ReactNode }) { return <html lang="en"><head><HeadContent /></head><body>{children}<Scripts /></body></html> }
