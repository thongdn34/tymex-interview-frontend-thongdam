import { queryClient } from '@/core/queryClient';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { QueryClientProvider } from '@tanstack/react-query';
import { FC, PropsWithChildren } from 'react';

export const TestRoot: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AntdRegistry>{children}</AntdRegistry>
    </QueryClientProvider>
  );
};
