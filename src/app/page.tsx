import { Title } from '@/components/Title';
import { templateService } from '@/service/template';

import * as S from './style';

export default async function Home() {
  const pageTitle = await templateService();

  return (
    <>
      <S.Main>
        <Title>{pageTitle.home.title}</Title>
      </S.Main>
    </>
  );
}
