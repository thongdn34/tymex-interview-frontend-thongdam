import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import 'antd/dist/reset.css';
import '@/core/globals.css';
import { Suspense } from 'react';
import { QueryProvider } from '@/components/QueryProvider';

export const metadata: Metadata = {
  title: 'TymeX Interview Frontend Thong Dam',
  description: 'UI assignment for TymeX',
  icons: {
    icon: '/favico.webp',
    shortcut: '/favico.webp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Suspense>
          <QueryProvider>
            <AntdRegistry>{children}</AntdRegistry>
          </QueryProvider>
        </Suspense>
      </body>
    </html>
  );
}
