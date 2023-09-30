import './assets/css/reset.css';
import './assets/css/global.css';
import { Montserrat } from 'next/font/google';

const mont = Montserrat({
    weight: ['200', '300', '500'],
    style: ['normal'],
    subsets: ['latin'],
});

export const metadata = {
    title: 'Soulbot',
    description: 'Soulbot',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={mont.className}>{children}</body>
        </html>
    );
}
