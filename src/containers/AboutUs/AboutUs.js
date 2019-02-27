import React, {Component, Fragment} from 'react';
import './AboutUs.css'

class AboutUs extends Component {
    render() {
        return <Fragment>
            <div className="services py-5">
            <div className="container">
                <div className="d-inline-block align-middle w-75 my-3">
                    <h2 className="mb-4"><span>We give</span> best services</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum reiciendis eum eius neque
                        placeat deleniti perspiciatis officia laudantium, ipsum esse cupiditate ab consequuntur quis,
                        quos cumque accusamus laboriosam, repellat quibusdam.</p>
                </div>
                <div className="row items">
                    <div className="col-lg-3 col-md-6 item item_1">
                        <h4>New way of vision</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut autem, suscipit deserunt omnis
                            molestias illo!</p>
                    </div>
                    <div className="col-lg-3 col-md-6 item item_2">
                        <h4>Fresh ideas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis laboriosam quas
                            repudiandae ducimus ratione inventore?</p>
                    </div>
                    <div className="col-lg-3 col-md-6 item item_3">
                        <h4>Strong foundations</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut autem, suscipit deserunt omnis
                            molestias illo!</p>
                    </div>
                    <div className="col-lg-3 col-md-6 item item_4">
                        <h4>Great support</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut autem, suscipit deserunt omnis
                            molestias illo!</p>
                    </div>
                </div>
            </div>
            </div>

</Fragment>
    }
}

export default AboutUs