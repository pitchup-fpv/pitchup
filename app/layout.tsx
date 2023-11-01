import '@fontsource/inter';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeRegistry from './ThemeRegistry';
import { Header } from '@/components/Header/Header';
import { Box } from '@mui/joy';
import { ConfigProvider } from '@/components/ConfigProvider/ConfigProvider';
import config from '@/src/config';
import { IndexProvider } from '@/components/IndexProvider/IndexProvider';
import { findPages } from '@/src/index';

import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pitchup - FPV Drone Wizard',
  description: 'Guided FPV drone setup',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const index = findPages("app");

  return (
    <html lang="en">
      <body className={inter.className}>
        <Box display="flex" flexDirection={"column"} justifyContent="center" maxWidth="1000px" margin="auto">
          <ThemeRegistry options={{ key: 'joy' }}>
            <ConfigProvider config={config}>
              <IndexProvider index={index}>
                <Header />
                <Box padding={"0rem 3em"}>
                    {children}
                </Box>
              </IndexProvider>
            </ConfigProvider>
          </ThemeRegistry>
        </Box>
      </body>
    </html>
  )
}
