import '../../src/App.css'

function AlertBox(props) {

    return (
        <div id="alertbox" className="alertbox">

            <h3><i className="bi bi-exclamation-circle-fill"></i> Alert</h3>

            <p id='alerttext'>alert</p>

        </div>
    )

}


export default AlertBox;