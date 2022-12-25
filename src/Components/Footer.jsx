import { FaSlackHash } from 'react-icons/fa';

function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className='text-center'>
      <div>
        <FaSlackHash className='text-6xl' />
        <p>Copyright &copy; {footerYear} All Rights Reserved!</p>
      </div>
    </footer>
  )
}

export default Footer