import type {Metadata} from 'next';
import Header from '../components/Header';
import './globals.css';
export const metadata:Metadata={title:{default:'A+H Architects — Selected Works',template:'%s — A+H Architects'},description:'Selected architectural and interior design works by A+H Architects, Vietnam.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/>{children}</body></html>}
