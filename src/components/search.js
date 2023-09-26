import '../../src/App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from './footer';
import Header from './header';
import AlertBox from './alertbox';
import { useRef } from 'react';

function Search() {

    const myRef = useRef();
    const myRef1 = useRef();
    
    function searchInput() {
    const intho = document.getElementById("city").value;

    if (intho === "kumananchavadi") {
        myRef1.current.style.display = "block";
        myRef.current.style.display = "none";
    }
    else if (intho === "ambattur") {
        myRef1.current.style.display = "none";
        myRef.current.style.display = "block";
    }
    else{
        myRef1.current.style.display = "none";
        myRef.current.style.display = "none";
    }
    
}


    return (

        <>
            <Header />
            <AlertBox />
            <div className="Search">
                <div className='searchbuttonwrapper'>
                    <input type="text"id='city' placeholder="Search by State, City or Area..."/> <button onClick={searchInput}><i class="bi bi-search"></i></button>
                </div>

                <div className='results'>

                <div className='result' ref={myRef}>
                    <h3>Ambattur Estate Fire Station</h3>
                    <hr/>
                    <p>CFO: <span id='cfo'>Vetrivel</span></p>
                    <span id='addresswrapper'>
                    <p>Address:</p>
                    <p id='address'>3Rd Cross Road, Near Logic Information Systems, Ambattur Industrial Estate, Chennai, Tamil Nadu 600058</p>
                    </span>
                    <button id="direction"><a  rel="noreferrer" href="https://www.google.co.in/maps/place/Ambattur+Estate+Fire+Station/@13.0953765,80.1617585,17z/data=!3m1!4b1!4m6!3m5!1s0x3a5263c1f6a6abc5:0xb601f149065762ea!8m2!3d13.0953765!4d80.1643334!16s%2Fg%2F1tf_r935?entry=ttu"  target="_blank"><i class="bi bi-geo-alt-fill"> Location</i></a></button>
                    <button id="call" ><a href="tel:9360782265"><i class="bi bi-telephone-fill"> Call</i></a></button>
                </div>

                <div className='result' ref={myRef1}>
                    <h3>Kumananchavadi Fire Station</h3>
                    <hr/>
                    <p>CFO: <span id='cfo'>Arul Murugan</span></p>
                    <span id='addresswrapper'>
                    <p>Address:</p>
                    <p id='address'>Trunk Road, Near Pandian Hotel, MSS Nagar, Kumananchavadi, Chennai, Tamil Nadu 600056</p>
                    </span>
                    <button id="direction"><a  rel="noreferrer" href="https://www.google.co.in/maps/place/Panimalar+Engineering+College/@13.0489049,80.0728893,17z/data=!3m1!4b1!4m6!3m5!1s0x3a5261c68a9f3031:0xab41c8bdcf32ad47!8m2!3d13.0489049!4d80.0754642!16s%2Fm%2F03d0n7q?entry=ttu"  target="_blank"><i class="bi bi-geo-alt-fill"> Location</i></a></button>
                    <button id="call" ><a href="tel:9360782265"><i class="bi bi-telephone-fill"> Call</i></a></button>
                </div>


            </div>


                <button id="location"><i class="bi bi-geo-alt-fill"></i></button>
            </div>
            <Footer />
        </>
    );
}

export default Search;