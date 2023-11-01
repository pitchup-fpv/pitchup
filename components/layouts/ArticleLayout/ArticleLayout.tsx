import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';

import TocObserver from '@/components/TocObserver/TocObserver';


const ArticleLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return <>
    <TocObserver />
    <Breadcrumbs />
    <main className='content'>
      {children}
    </main>

  </>
}

export default ArticleLayout