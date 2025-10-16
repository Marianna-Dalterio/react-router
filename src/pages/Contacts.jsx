import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Contacts() {
    return (
        <div className="container">
            <h1>Contattaci</h1>
            <div className="row">
                <div className="col px-4">
                    <a class="icon-link d-block mb-3" href="#">
                        <FaFacebook className="me-2" />
                        Facebook
                    </a>
                    <a class="icon-link d-block mb-3" href="#">
                        <FaInstagram className="me-2" />
                        Instagram
                    </a>
                    <a class="icon-link d-block" href="#">
                        <FaTwitter className="me-2" />
                        Twitter
                    </a>
                </div>
            </div>

        </div>

    )
};