import { FC } from 'react';
import { RouterProvider } from '../providers';
import { initFirebase } from '../hosting';
import { Layout } from '../layout';
import { SinglePage} from '@/pages'

initFirebase();

export const App: FC = () => {
  return (
    <RouterProvider>
      <Layout>
        <SinglePage />
      </Layout>
    </RouterProvider>
  )
}