import Head from 'next/head';
import Navbar from './Navbar';

const Layout = ({ children }) => (
    <>
        
        <Head>
            <title>Register</title>
        </Head>
        <Navbar />
        
            {children}
        
            
        
        
    </>
)

export default Layout;