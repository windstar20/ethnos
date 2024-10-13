import { LayoutHeader } from '@/widgets/LayoutHeader/ui';
import ReactQueryProviders from '@/@shared/hooks/useReactQuery';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
// import '@/@shared/styles/reset.css';
import '@/@shared/styles/globals.css';
import { PropsWithChildren } from 'react';

const pretendardMedium = localFont({
  src: '../@shared/fonts/Pretendard-Medium.subset.woff',
  variable: '--font-pretendard-medium',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'My ethnos app',
  description: 'Generated by james',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="es" className={'text-custom-62.5'}>
      <body
        suppressHydrationWarning
        className={`${pretendardMedium.variable} ${pretendardMedium.variable} h-lvh`}
      >
        <ReactQueryProviders>
          {/*<LayoutHeader />*/}
          {children}
        </ReactQueryProviders>
      </body>
    </html>
  );
}
