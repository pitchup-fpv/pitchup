"use server"

import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';

import TocObserver from '@/components/TocObserver/TocObserver';


export default async function ArticleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>
    <TocObserver />
    <Breadcrumbs />
    <main className='content'>
      {children}
    </main>

  </>
}