import '../../src/App.css'
import Footer from './footer';
import Header from './header';
import profimg from './img/Profile-image.jpg';
import AlertBox from './alertbox';
import { Link } from 'react-router-dom';

function Profile() {

    function EmgContacts() {
        if (document.getElementById('emgWrapper').style.height === 'auto'){
            document.getElementById('emgWrapper').style.height = '0px';
        }
        else{
        document.getElementById('emgWrapper').style.height = 'auto';
        }
    }

    function userGuide() {
        if (document.getElementById('userGuideWrapper').style.height === 'auto'){
            document.getElementById('userGuideWrapper').style.height = '0px';
        }
        else{
        document.getElementById('userGuideWrapper').style.height = 'auto';
        }
    }

    function faqs() {
        if (document.getElementById('faqsWrapper').style.height === 'auto'){
            document.getElementById('faqsWrapper').style.height = '0px';
        }
        else{
        document.getElementById('faqsWrapper').style.height = 'auto';
        }
    }


    function editEmgButton(){
        document.getElementById('editEmgButton').style.display = 'none';
        document.getElementById('addEmgButton').style.display = 'none';
        document.getElementById('doneEditEmgButton').style.display = 'block';
        document.documentElement.style.setProperty('--del-button-background-color', 'red');
        document.documentElement.style.setProperty('--del-button-color', 'white');
        let deleteButtons = document.getElementsByClassName('deleteEmgButton');
        for (let i = 0; i < deleteButtons.length; i++) {
            deleteButtons[i].disabled = false;
        }
    }
    function doneEditemgContact(){
        document.getElementById('editEmgButton').style.display = 'block';
        document.getElementById('addEmgButton').style.display = 'block';
        document.getElementById('doneEditEmgButton').style.display = 'none';
        document.documentElement.style.setProperty('--del-button-background-color', '#cacaca');
        document.documentElement.style.setProperty('--del-button-color', '#7d7d7d');
        let deleteButtons = document.getElementsByClassName('deleteEmgButton');
        for (let i = 0; i < deleteButtons.length; i++) {
            deleteButtons[i].disabled = true;
        }
    }

    return (
        <>
            <Header />
            <AlertBox />
            <div className="Profile">
                <div className='profileHeader'>
                    <img id="profilePic" src={profimg} alt="" />
                    <div className='profileInfo'>
                        <h2 id='profileName'>Ashok Shankar</h2>
                        <h3 id='profileAadhar'> **** **** 3746</h3>
                        <button id='logoutButton'><i class="bi bi-box-arrow-right"></i> Log out</button>
                    </div>
                </div>


                <div className='emgContacts'>
                    <h2>Emergency Contacts <button onClick={EmgContacts}><i class="bi bi-arrow-down-circle-fill"></i></button></h2>

                <div id='emgWrapper'>

                    <div className='emgContact'>
                        <div className='emgContactWrapper'>
                        <i class="bi bi-person-circle"></i>
                        <div>
                        <h3>Vivek</h3>
                        <h4>**** **** 3746</h4>
                        </div>
                        </div>
                        <button className='deleteEmgButton' disabled><i class="bi bi-trash3-fill" ></i></button>
                    </div>


                    <div className='emgContact'>
                        <div className='emgContactWrapper'>
                        <i class="bi bi-person-circle"></i>
                        <div>
                        <h3>Bruce Wayne</h3>
                        <h4>**** **** 1946</h4>
                        </div>
                        </div>
                        <button className='deleteEmgButton' disabled><i class="bi bi-trash3-fill" ></i></button>
                    </div>



                    <div className='emgContact'>
                        <div className='emgContactWrapper'>
                        <i class="bi bi-person-circle"></i>
                        <div>
                        <h3>Arvind Kumar</h3>
                        <h4>**** **** 1406</h4>
                        </div>
                        </div>
                        <button className='deleteEmgButton' disabled><i class="bi bi-trash3-fill"></i></button>
                    </div>


                    <div className='emgContact'>
                        <div className='emgContactWrapper'>
                        <i class="bi bi-person-circle"></i>
                        <div>
                        <h3>Vigneshkanth</h3>
                        <h4>**** **** 0976</h4>
                        </div>
                        </div>
                        <button className='deleteEmgButton'disabled><i class="bi bi-trash3-fill" ></i></button>
                    </div>

                    <div className='emgButtons'>
                        <button id='editEmgButton' onClick={editEmgButton}><i class="bi bi-pencil-fill"></i> Edit</button>
                        <button id='addEmgButton' ><i class="bi bi-person-plus-fill"></i> New</button>
                        <button id='doneEditEmgButton' onClick={doneEditemgContact}><i class="bi bi-pencil-fill"></i> Done</button>
                    </div>


                </div>

            </div>

            <div className='userGuide'>
                    <h2>User Guide <button id='userGuideButton' onClick={userGuide}><i class="bi bi-arrow-down-circle-fill"></i></button></h2>

                <div id='userGuideWrapper'>

                <iframe width="90%" height="315" src="https://www.youtube.com/embed/rcqxl4s_dow?si=882tFk13P8xUUZSz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                </div>

            </div>

            <div className='faqs'>
                    <h2>FAQs <button onClick={faqs}><i class="bi bi-arrow-down-circle-fill"></i></button></h2>

                <div id='faqsWrapper'>

                    <div className="faq">

                        <h4 className='question'>What if I accidentaly clicked the SoS?</h4>
                        <p className='answer'>Don't worry, you can cancel the SoS within 5 seconds of clicking it.</p>

                    </div>

                    <div className="faq">

                        <h4 className='question'>What happens after I activate the SoS?</h4>
                        <p className='answer'>After activating the SoS, your device will typically send a distress signal or notification to predefined contacts and emergency services.</p>

                    </div>

                    <div className="faq">

                        <h4 className='question'>Can I customize the contacts or services notified during an SoS?</h4>
                    
                        <p className='answer'>Yes, many devices allow you to customize the contacts or services that receive the SoS notification.</p>

                    </div>

                    <br />
                    <br />

                </div>

            </div>

            <div className='helpbtn'>
            <Link to="/chat"><button id='helpButton'><i class="bi bi-chat-right-text-fill"></i> Help</button></Link>
            </div>
            </div>
            <Footer />
        </>
    );
}

export default Profile;