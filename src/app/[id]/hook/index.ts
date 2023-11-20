import type { PageIdProps } from '../page';

import { redirect } from 'next/navigation';

import { arrayContainNumber } from '@/functions';
import { templateService } from '@/service/template';

type UsePageId = {
  allowedNumbers: number[];
} & Pick<PageIdProps, 'params'>;

const usePageId = async ({ allowedNumbers, params }: UsePageId) => {
  const paramsIdNumber = parseInt(params.id);

  if (
    isNaN(paramsIdNumber) ||
    !arrayContainNumber(allowedNumbers, paramsIdNumber)
  ) {
    return redirect('/');
  }

  const pageTitle = await templateService();

  return {
    pageTitle
  };
};

export { usePageId };
