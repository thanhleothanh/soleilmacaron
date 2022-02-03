export default function Footer() {
  return (
    <footer className='flex items-center justify-between p-3 3xl:p-5 2xl:p-4'>
      <div className='space-x-2 text-base 2xl:text-lg 3xl:text-xl'>
        <a
          href='https://www.facebook.com/soleil.macaron'
          rel='noopener noreferrer'
          target='_blank'
        >
          <i className='fab fa-facebook' />
        </a>
        <a
          href='https://www.instagram.com/soleilmacaron/'
          rel='noopener noreferrer'
          target='_blank'
        >
          <i className='fab fa-instagram' />
        </a>
      </div>

      <div className='text-sm xl:text-base 3xl:text-lg'>
        2022 &copy; Soleil Macaron
      </div>
    </footer>
  );
}
