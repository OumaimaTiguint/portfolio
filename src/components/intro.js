import React from 'react';
import './intro.css';

class Intro extends React.Component {
    render() {
        return (
            <div className="intro" id="intro">
                <h1 className="greeting">Hello, I am</h1>
                <h1 className="name">Oumaima <br/> Tiguint</h1>
                <p className="role">Front end developer</p>
            </div>
        )
    }
}

export default Intro;