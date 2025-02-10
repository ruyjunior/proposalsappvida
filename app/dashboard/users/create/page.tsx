import Form from '@/app/ui/users/create-form';
import Breadcrumbs from '@/app/ui/breadcrumbs';
import { fetchBases } from '@/app/lib/bases/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Creat User',
};

export default async function Page() {
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Users', href: '/dashboard/users' },
          {
            label: 'Create User',
            href: '/dashboard/users/create',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}