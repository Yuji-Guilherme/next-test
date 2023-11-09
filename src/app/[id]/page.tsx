import { redirect } from 'next/navigation';

import { Title } from '@/components/Title';
import { Button } from '@/components/Button';

type PageIdProps = {
  params: { id: string };
};

export default function PageId({ params }: PageIdProps) {
  if (isNaN(parseInt(params.id)) || parseInt(params.id) > 1) redirect('/');

  return (
    <>
      <main className="flex flex-col items-center justify-center h-full gap-9">
        <Title>Simple Page {params.id}</Title>
        <Button href={'/'} dark>
          Go to Home
        </Button>
      </main>
    </>
  );
}
