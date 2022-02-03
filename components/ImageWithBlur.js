import Image from 'next/image';
import { BlurhashCanvas } from 'react-blurhash';
import { defaultHash } from '@/utils/staticData';

const ImageWithBlur = ({ image, objectFit }) => {
  return (
    <div className='w-full h-full select-none'>
      <BlurhashCanvas
        hash={image.blurhash ?? defaultHash}
        className='absolute object-cover w-full h-full'
      />
      <Image
        alt='soleil-macaron'
        className='absolute'
        src={image.src}
        objectFit={objectFit}
        layout='fill'
      />
    </div>
  );
};

export default ImageWithBlur;
