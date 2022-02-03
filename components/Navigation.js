import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';
import DropdownMenu1 from './DropdownMenu1';
import DropdownMenu2 from './DropdownMenu2';

export default function Navigation() {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const container = useRef();

  useEffect(() => {
    container.current.addEventListener('mouseenter', () => setShow(true));
    container.current.addEventListener('mouseleave', () => setShow(false));
  }, []);

  return (
    <nav className='sticky top-0 z-10 flex flex-col w-full py-2 bg-white'>
      <ul className='items-center justify-center hidden h-full px-5 space-x-4 text-xs font-medium md:flex standalone:pb-5 standalone:items-end sm:text-sm md:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl'>
        <li ref={container} className='relative'>
          <button
            className={`px-5 font-medium ${'hover:text-soleilLighterNavy'}`}
          >
            Sản phẩm
          </button>
          <DropdownMenu2 show={show} setShow={setShow} />
        </li>
        <li>
          <Link href='/order'>
            <a
              className={`px-5 ${'hover:text-soleilLighterNavy hover:underline'}`}
            >
              Đặt hàng
            </a>
          </Link>
        </li>
        <li>
          <Link href='/care'>
            <a
              className={`px-5 ${'hover:text-soleilLighterNavy hover:underline'}`}
            >
              Bảo quản
            </a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a
              className={`px-5 ${'hover:text-soleilLighterNavy hover:underline'}`}
            >
              Về chúng tôi
            </a>
          </Link>
        </li>
      </ul>
      <div className='flex justify-end w-full h-full pr-3 md:hidden'>
        <DropdownMenu1 />
      </div>
    </nav>
  );
}
