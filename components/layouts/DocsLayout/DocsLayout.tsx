import TocObserver from '@/components/TocObserver/TocObserver';


const DocsLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return <>
    <TocObserver />
    <main className='content'>
      {children}
    </main>
  </>
}

export default DocsLayout