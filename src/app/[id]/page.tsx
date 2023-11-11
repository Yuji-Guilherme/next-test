import { redirect } from 'next/navigation';

import { Title } from '@/components/Title';
import { HomeButton } from '@/components/Button';

import { MainWithGap } from '../style';

type PageIdProps = {
  params: { id: string };
};

export default function PageId({ params }: PageIdProps) {
  if (isNaN(parseInt(params.id)) || parseInt(params.id) > 1) redirect('/');

  return (
    <>
      <MainWithGap>
        <Title>Simple Page {params.id}</Title>
        <HomeButton />
      </MainWithGap>
    </>
  );
}
