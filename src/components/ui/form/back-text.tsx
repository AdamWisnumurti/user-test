import { HiArrowLeft } from 'react-icons/hi';

export const BackText = ({ onClick }: { onClick: () => void }) => {
  return (
    <div
      className="flex cursor-pointer items-center space-x-2 text-primary"
      onClick={onClick}
    >
      <HiArrowLeft size={22} />
      <p className="text-lg font-semibold">Sebelumnya</p>
    </div>
  );
};
