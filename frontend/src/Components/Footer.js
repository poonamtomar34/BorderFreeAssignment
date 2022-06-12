import React from "react"

const Footer = ()=><footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">MintrA</h5>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Myntra Community</h5>
                <ul className="list-unstyled footerLink">
                    <li><a href="#!">Resources</a></li>
                    <li><a href="#!">About</a></li>
                    <li><a href="#!">Contact</a></li>
                    <li><a href="#!">Blog</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Help</h5>
                <ul className="list-unstyled footerLink">
                    <li><a href="#!">Support</a></li>
                    <li><a href="#!">Signup</a></li>
                    <li><a href="#!">Signin</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="#"><span> poonam@poonam.com</span></a>
    </div>

</footer>

export default Footer