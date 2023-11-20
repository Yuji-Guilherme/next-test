import { Title } from '@/components/Title';
import { HomeButton } from '@/components/Button';

import { MainWithGap } from '../style';
import { usePageId } from './hook';

export type PageIdProps = {
  params: { id: string };
};

export default async function PageId({ params }: PageIdProps) {
  const allowedNumbers = [1];
  const { pageTitle } = await usePageId({ allowedNumbers, params });

  return (
    <>
      <MainWithGap>
        <Title>{`${pageTitle.pageId.title} ${params.id}`}</Title>
        <HomeButton />
      </MainWithGap>
    </>
  );
}
