import '../../src/App.css';
import Header from './header';
import Footer from './footer';
import AlertBox from './alertbox';


function LandingPage() {
    return (
        <>
            <Header />
            <AlertBox />
            <div className='Login'>
            </div>
            <Footer />
        </>
    );
}

export default LandingPage;
