import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const DropdownMenu2 = ({ show, setShow }) => {
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
    <div ref={container}>
      <div
        style={{
          visibility: `${show ? 'visible' : 'hidden'}`,
          opacity: `${show ? '1' : '0'}`,
          transition: 'all 0.2s',
        }}
      >
        <div className='absolute left-0 flex flex-col w-56 mt-1 overflow-hidden font-medium text-left origin-top-right bg-white'>
          <Link href='/collections'>
            <a className='px-5 py-3 mt-1 hover:text-soleilLighterNavy hover:underline'>
              Set theo chủ đề
            </a>
          </Link>
          <Link href='/products'>
            <a className='px-5 py-3 hover:underline hover:text-soleilLighterNavy'>
              Các vị truyền thống
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu2;
