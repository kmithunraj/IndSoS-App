import '../../src/App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './header';
import Footer from './footer';
import AlertBox from './alertbox';

function Chat() {
    return (
        <>
            <Header />
            <AlertBox />
            <div className="Chat">

                <div className='chatWrapper'>

                    <div className='adminChat0'>
                        <i class="bi bi-person-fill"></i>
                        <div className='adminTextWrapper'>
                            <h4>ADMIN</h4>
                            <p id='adminText0'>How can we help you?</p>
                        </div>
                    </div>

                </div>

                <div className='chatButtonWrapper'>
                    <input type="text" placeholder="Type a message..."/> <button><i class="bi bi-send-fill"></i></button>
                </div>

            </div>
            <Footer />
        </>
    );
}

export default Chat;