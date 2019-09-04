import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Blog from './app/components/Blog';
import WelcomeModal from './app/components/WelcomeModal';




export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            posts: [
                {   
                    title: "Doloribus eligendi natus error autem alias explicabo, aspernatur at suscipit neque quos soluta dolore quaerat nesciunt. Adipisci, placeat?",
                    post : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus labore ratione, non dolor, mollitia qui id quam pariatur laborum sit voluptatum! Vel nemo nihil id praesentium. Non dicta architecto magni?Repellendus esse nihil hic ad quidem totam provident eveniet incidunt nostrum, nulla voluptas ipsum magni nam soluta dolorum saepe excepturi, beatae possimus autem accusantium corrupti eaque tempora! Fugit, facilis labore?",
                    author: "D.Washington",
                    date: "1920.01.02"
                },
                {
                    title: "Lorem ipsum, dolor ",
                    post : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus labore ratione, non dolor, mollitia qui id quam pariatur laborum sit voluptatum! Vel nemo nihil id praesentium. Non dicta architecto magni?Repellendus esse nihil hic ad quidem totam provident eveniet incidunt nostrum, nulla voluptas ipsum magni nam soluta dolorum saepe excepturi, beatae possimus autem accusantium corrupti eaque tempora! Fugit, facilis labore?",
                    author: "A.Lincoln",
                    date: "1820.10.02"

                },
                {   
                    title: "Mollitia ipsum, dolor sit amet r at suscipit neque quos soluta dolore quaerat nesciunt. Adipisci, placeat?",
                    post : "Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus labore ratione, non dolor, mollitia qui ipsum, dolor sit amet consectetur adipisicing elit. Ducimus labore ratione, non dolor, mollitia qui id quam pariatur laborum sit voluptatum! Vel nemo nihil id praesentium. Non dicta architecto magni?Repellendus esse nihil hic ad quidem totam provident eveniet incidunt nostrum, nulla voluptas ipsum magni nam soluta dolorum saepe excepturi, beatae possimus autem accusantium corrupti eaque tempora! Fugit, facilis labore?",
                    author: "V.V.Putin",
                    date: "2020.01.02"
                },
                {
                    title: "Ipsum, dolor sit amet consectetur adipisicing elit. Omnis officia atque corporis? Doloribus eligendi natus error autem alias explicabo, aspernatur at suscipit neque quos soluta dolore quaerat nesciunt. Adipisci, placeat?",
                    post : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus labore ratione, non dolor, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus labore ratione, non dolor, mollitia quimollitia qui id quam pariatur laborum sit voluptatum! Vel nemo nihil id praesentium. Non dicta architecto magni?Repellendus esse nihil hic ad quidem totam provident eveniet incidunt nostrum, nulla voluptas ipsum magni nam soluta dolorum saepe excepturi, beatae possimus autem accusantium corrupti eaque tempora! Fugit, facilis labore?",
                    author: "I.Karimov",
                    date: "1999.12.31"

                }
            ]
        }
    }
    

    render() {
        return (
            <div>
                <Blog {this.state.post}/>
            </div>
        );
    }
}

ReactDOM.render (<App />, document.querySelector('#root'));