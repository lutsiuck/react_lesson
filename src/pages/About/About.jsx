import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';

const About = () => {
    return (
        <main className="container pt-5 pb-5">
            <div className="row">
                <div className="col-md-9">
                    About page
                </div>
                <Sidebar />
            </div>
        </main>
    )
}

export default About;