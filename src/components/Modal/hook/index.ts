import { useRouter, useSearchParams } from 'next/navigation';
import { useRef } from 'react';

const useModal = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const hasImageQueryInUrl = searchParams.has('image');
  const imageId = searchParams.get('image');

  const dialogRef = useRef<HTMLDialogElement>(null);

  const closeModal = () => {
    dialogRef?.current?.close();
    router.replace('/gallery');
  };

  return {
    hasImageQueryInUrl,
    imageId,
    dialogRef,
    closeModal
  };
};

export { useModal };
