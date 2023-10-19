import Image from 'next/image';
import { useRouter } from 'next/router';

export const CardUser = ({ item }: any) => {
  const router = useRouter();
  return (
    <div
      className="w-full rounded-xl bg-white text-center text-neutral-90 hover:shadow-sm hover:shadow-neutral-40"
      onClick={() => router.push(`/users/${item?.id}`)}
    >
      <Image
        src={item?.avatar}
        alt={`avatar-${item?.first_name || ''}`}
        width={0}
        height={0}
        sizes="fit"
        className="h-auto w-full cursor-pointer rounded-t-xl "
      />
      <div className="p-4">
        <p className="text-lg font-semibold">{`${item?.first_name} ${item?.last_name}`}</p>
        <p className="text-sm">{item?.email}</p>
      </div>
    </div>
  );
};
