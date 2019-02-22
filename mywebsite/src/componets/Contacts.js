import React, { Component } from 'react'

export class Contacts extends Component {
    render() {
        return (
            <div id='contacts'>
                <div id="contact_img">

                    <div id="contact_overlay"></div>

                    <h4> Contacts </h4>

                </div>

                <div className="container">
                    <div className="contact_content">

                        <h4>Get in Touch</h4>


                    </div>

                </div>

                <div className="location row">

                    <div id="map" onMouseEnter={this.props.map} className="col-xs-7 col-sm-7 col-md-7">
                    </div>

                    <div className="my_contacts col-xs-5 col-sm-5 col-md-5">

                        <h4>Contact</h4>

                        <p><span>P </span> (+255) 672137313</p>
                        <p><span>S </span> Chrisso</p>
                        <p><span>E  </span> chrissoemma@gmail.com</p>

                        <h4>Address</h4>
                        <p>Tanzania</p>
                        <p>Dar-es-salaam</p>
                        <p>Kijitonyama</p>

                        <h4>Social media</h4>

                        <a href="/">facebook</a>
                        <a href="/">twitter</a>
                    </div>





                </div>
            </div>
        )
    }
}

export default Contacts
