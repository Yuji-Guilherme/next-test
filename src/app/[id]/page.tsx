import { redirect } from 'next/navigation';

import { Title } from '@/components/Title';
import { Button } from '@/components/Button';

type PageProps = {
  params: { id: string };
};

export default function Page({ params }: PageProps) {
  if (parseInt(params.id) > 1) redirect('/');

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
