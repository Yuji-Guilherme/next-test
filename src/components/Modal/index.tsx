'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import { useModal } from './hook';

import * as S from './style';

function Modal() {
  const { hasImageQueryInUrl, imageId, dialogRef, closeModal } = useModal();

  if (!hasImageQueryInUrl) return null;

  dialogRef.current?.showModal();

  return (
    <AnimatePresence>
      <S.Dialog ref={dialogRef}>
        <motion.div
          className={S.imageWrapperClassName}
          layoutId={`image-${imageId}`}
        >
          <Image
            src={'/example.png'}
            width={S.imageSize.width}
            height={S.imageSize.height}
            style={{ width: S.imageSize.width, height: S.imageSize.height }}
            alt="image full size"
            className={S.imageClassName}
          />
        </motion.div>
        <motion.aside
          initial={{
            x: window.innerWidth / 4
          }}
          animate={{
            x: 0
          }}
          transition={{
            duration: 0.3
          }}
          className={S.asideClassName}
        >
          <S.Button onClick={closeModal}>
            <Image
              src={'/svg/x.svg'}
              style={{ width: S.closeIconSize, height: S.closeIconSize }}
              width={S.closeIconSize}
              height={S.closeIconSize}
              alt="close icon"
            />
          </S.Button>
          <S.Title>{`Title ${imageId}`}</S.Title>
          <S.Description>description: ...</S.Description>
        </motion.aside>
        <S.Background onClick={closeModal} />
      </S.Dialog>
    </AnimatePresence>
  );
}

export { Modal };
