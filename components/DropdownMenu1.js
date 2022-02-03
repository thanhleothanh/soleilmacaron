import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const DropdownMenu1 = () => {
  const [show, setShow] = useState(false);
  const container = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (container ?? !container.current.contains(event.target)) {
        if (!show) return;
        setShow(false);
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [show, container]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (!show) return;
      if (event.key === 'Escape') {
        setShow(false);
      }
    };
    document.addEventListener('keyup', handleEscape);
    return () => document.removeEventListener('keyup', handleEscape);
  }, [show]);

  return (
    <div ref={container} className='relative'>
      <button onClick={() => setShow(!show)}>
        <i className='fas fa-bars fa-lg' />
      </button>

      <div
        style={{
          visibility: `${show ? 'visible' : 'hidden'}`,
          opacity: `${show ? '1' : '0'}`,
          transition: 'all 0.2s',
        }}
      >
        <div className='absolute right-0 flex flex-col overflow-hidden font-medium text-right origin-top-right bg-white w-44'>
          <Link href='/collections'>
            <a className='p-3 text-sm hover:text-soleilLighterNavy hover:underline'>
              Set theo chủ đề
            </a>
          </Link>
          <Link href='/products'>
            <a className='p-3 text-sm hover:text-soleilLighterNavy hover:underline'>
              Các vị truyền thống
            </a>
          </Link>
          <Link href='/order'>
            <a className='p-3 text-sm hover:underline hover:text-soleilLighterNavy'>
              Đặt hàng
            </a>
          </Link>
          <Link href='/care'>
            <a className='p-3 text-sm hover:underline hover:text-soleilLighterNavy'>
              Bảo quản
            </a>
          </Link>
          <Link href='/about'>
            <a className='p-3 text-sm hover:underline hover:text-soleilLighterNavy'>
              Về chúng tôi
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu1;
