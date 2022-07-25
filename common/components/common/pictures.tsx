import Image from 'next/image';

export const Pictures = ({ filedId }: { filedId: any }) => {
  const imageUrl = `https://www.whatthebre.com/assets/${filedId}?quality=50`;
  console.log(imageUrl);
  return (
    <Image
      className="project-image-border-radius image-container"
      src={imageUrl}
      layout="fill"
    />
  );
};
