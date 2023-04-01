import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Next 13 tutorial',
  description: 'This is my beginner Next 13 tutorial',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='mx-md-32 mx-10 my-5'>
        <nav className='flex justify-between'>
          <h1 className='text-lg font-bold'>Logo</h1>
          <ul className='flex justify-center mb-10'>
            <li className='mr-5'>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
        {children}</body>
    </html>
  );
}
