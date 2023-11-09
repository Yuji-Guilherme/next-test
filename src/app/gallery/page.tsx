import { Title } from '@/components/Title';
import { Button } from '@/components/Button';
import { Modal } from '@/components/Modal';

export default function Gallery() {
  return (
    <main className="flex flex-col items-center justify-center h-full gap-9">
      <Title>Gallery</Title>
      <div className="flex items-center justify-between gap-6">
        <Modal />
        <Modal />
        <Modal />
      </div>
      <Button href={'/'} dark>
        Go to Home
      </Button>
    </main>
  );
}
