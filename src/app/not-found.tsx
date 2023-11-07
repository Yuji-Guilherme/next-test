import { Button } from '@/components/Button';
import { Title } from '@/components/Title';

export default function NotFound() {
  return (
    <>
      <main className="flex flex-col items-center justify-center h-full gap-9">
        <Title>{`404, Sorry, there's nothing here`}</Title>
        <Button href={'/'} dark>
          Go to Home
        </Button>
      </main>
    </>
  );
}
