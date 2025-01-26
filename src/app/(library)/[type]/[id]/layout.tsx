import Button from '@/components/shared/button';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default async function LayoutDetail({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-4 py-10 bg-white flex flex-col gap-8">
      <Link href="/">
        <Button
          icon={<ChevronLeftIcon className="h-5 w-5" />}
          label="Go back"
          variant="text"
        />
      </Link>
      {children}
    </div>
  );
}
