import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Layout from '@/components/Layout';
import ImageWithBlur from '@/components/ImageWithBlur';
import {
  carouselImages,
  carouselImages as images,
  macaronImages as macaronImages,
} from '@/utils/staticData.js';

export default function Home() {
  const carouselRef = useRef();
  const slideRef = useRef();
  const [image, setImage] = useState(images[0]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let index = 1;
    function slide() {
      setImage(images[index++ % images.length]);
      carouselRef.current.classList.add('fade-anim');
    }
    carouselRef.current.addEventListener('animationend', () => {
      carouselRef.current.classList.remove('fade-anim');
    });
    const intervalId = setInterval(slide, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    function scrollLeft() {
      if (slideRef.current.scrollLeft !== slideRef.current.scrollWidth) {
        slideRef.current.scrollTo(slideRef.current.scrollLeft + 1, 0);
      }
    }
    const intervalId = setInterval(scrollLeft, 20);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  return (
    <Layout title='Soleil Macaron' description='macaron and more'>
      <div className='flex flex-col w-full min-h-screen bg-soleilYellow'>
        <div
          ref={carouselRef}
          className='relative flex items-center justify-center w-full pb-5/6 sm:pb-3/4 md:pb-3/5 lg:pb-2/5'
        >
          {image && (
            <ImageWithBlur image={image} layout='fill' objectFit='cover' />
          )}
        </div>

        <div className='flex flex-col h-auto px-10 bg-yellow-200 md:px-20 lg:px-32 xl:px-40'>
          <div className='flex justify-center w-full my-8 text-xl sm:text-2xl md:text-4xl md:my-16 lg:text-5xl'>
            <div className='flex-grow hidden mt-6 border-t-2 md:block border-soleilNavy'></div>

            <span className='flex-shrink mx-4 text-center'>
              Các vị bánh truyền thống
            </span>
            <div className='flex-grow hidden mt-6 border-t-2 md:block border-soleilNavy'></div>
          </div>
          <div
            ref={slideRef}
            className='flex -mt-5 space-x-10 overflow-x-scroll no-scrollbar md:-mt-10 style-7 md:space-x-16'
          >
            {macaronImages.map((img, i) => (
              <div
                className='relative flex-shrink-0 md:w-64 w-44 h-44 md:h-64'
                key={img.blurhash + i}
              >
                <ImageWithBlur image={img} layout='fill' objectFit='cover' />
                <div className='absolute inset-x-0 bottom-0 flex justify-center italic'>
                  {img.name}
                </div>
              </div>
            ))}
            <div className='relative flex-shrink-0 md:w-64 w-44 h-44 md:h-64'>
              <div className='flex items-center justify-center w-full h-full'>
                <i
                  className='text-5xl fas fa-backward hover:text-soleilLighterNavy'
                  onClick={() => (slideRef.current.scrollLeft = 0)}
                />
              </div>
            </div>
          </div>
          <div className='flex justify-center w-full select-none'>
            <Link href='/products'>
              <a
                className='max-w-lg px-2 py-1 my-8 border-2 md:px-4 md:my-16 md:text-xl border-soleilNavy hover:bg-soleilNavy hover:text-white'
                style={{
                  transition: 'all 0.2s',
                }}
              >
                Chi tiết
              </a>
            </Link>
          </div>
        </div>

        <div className='flex flex-col h-auto px-10 bg-soleilYellow lg:px-20'>
          <div className='grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6 place-items-center'>
            <div
              className='relative w-full lg:col-span-2 pb-2/3'
              style={{
                transform: `translate(${offset / 100}px, 0px)`,
                transition: `transform 0.3s`,
              }}
            >
              <ImageWithBlur
                image={carouselImages[1]}
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div
              className='relative w-full pb-1/1'
              style={{
                transform: `translate(0px, ${offset / 100}px)`,
                transition: `transform 0.3s`,
                aspectRatio: '1/1',
              }}
            >
              <ImageWithBlur
                image={carouselImages[2]}
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div
              className='relative w-full pb-1/1'
              style={{
                transform: `translate(${offset / 130}px, 0px)`,
                transition: `transform 0.3s`,
              }}
            >
              <ImageWithBlur
                image={carouselImages[3]}
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div
              className='relative w-full pb-3/2'
              style={{
                transform: `translate(${offset / 100}px,0px)`,
                transition: `transform 0.3s`,
              }}
            >
              <ImageWithBlur
                image={carouselImages[4]}
                layout='fill'
                objectFit='cover'
              />
            </div>

            <div
              className='relative w-full col-span-1 lg:row-start-3 pb-2/3'
              style={{
                transform: `translate(${offset / 90}px, -${offset / 100}px)`,
                transition: `transform 0.3s`,
              }}
            >
              <ImageWithBlur
                image={carouselImages[5]}
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div
              className='relative self-end my-10 italic md:text-xl lg:row-start-2 lg:col-start-3'
              style={{
                transform: `translate(${offset / 150}px, -${offset / 100}px)`,
                transition: `transform 0.3s`,
              }}
            >
              based in Hanoi
            </div>
            <div
              className='relative self-end col-span-2 my-10 italic md:text-xl lg:row-start-3 lg:col-start-2'
              style={{
                transform: `translate(${offset / 150}px, -${offset / 100}px)`,
                transition: `transform 0.3s`,
              }}
            >
              <p className='my-2'>
                Đặt hàng và đánh giá tại <i className='fab fa-facebook' />{' '}
                <a
                  href='https://www.facebook.com/soleil.macaron/'
                  rel='noopener noreferrer'
                  target='_blank'
                  className='hover:underline hover:text-soleilLighterNavy'
                >
                  Soleil Macaron
                </a>
              </p>
              <p className='my-2'>
                Theo dõi chúng tôi qua <i className='fab fa-instagram' />{' '}
                <a
                  href='https://www.instagram.com/soleilmacaron/'
                  rel='noopener noreferrer'
                  target='_blank'
                  className='hover:underline hover:text-soleilLighterNavy'
                >
                  @soleilmacaron
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
