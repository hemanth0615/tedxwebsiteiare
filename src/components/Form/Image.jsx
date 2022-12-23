import qr from "../../assets/Form/QRcode.png"
import "./Image.css";
function QRImage(){
    return(
        <div>
            <h5>Refer to the following UPI if QR fails</h5>
            <p>abc@icici</p>
            <img src = { qr } alt = "qrcode" />
        </div>
    )
}

export default QRImage;