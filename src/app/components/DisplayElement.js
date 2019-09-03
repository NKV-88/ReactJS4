import React from 'react';


export default class DisplayElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false
        }
    }
    render() {
        let newsBlock;
        if (this.state.display) {
            newsBlock = <div>
            <h3>Новости</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eius ullam facere autem, minima cum perspiciatis explicabo placeat nobis optio laborum commodi, reprehenderit vero, delectus numquam minus modi pariatur perferendis?
            Modi, asperiores. Sit sapiente eligendi fugit, architecto, assumenda aliquam ut unde impedit incidunt ipsam perferendis, quibusdam nam vel iste corporis repellat aut aperiam illo beatae voluptatem adipisci ad. Sint, rem.
            In fugit, consequuntur sit quod velit tenetur excepturi veritatis debitis dolores ea distinctio explicabo omnis, earum vel rerum nesciunt cum vitae doloremque, nihil reprehenderit non nobis facilis totam culpa. Similique.
            Alias veritatis repellat culpa nostrum harum? Tenetur, cum quis cupiditate enim placeat assumenda, earum accusamus reiciendis eos harum ullam nisi repellat, totam modi veniam quaerat expedita quisquam. Accusamus, a fuga!
            Quibusdam voluptas laudantium illo sit ipsam beatae id blanditiis ab. Saepe, ratione autem facere itaque atque quis? Natus iste modi dicta! Explicabo voluptates quia aliquam culpa tempore pariatur at ex?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eaque molestias rem est vitae nobis reiciendis minima quod at recusandae? Fugiat rerum repellat quia sapiente, quidem eveniet recusandae itaque voluptate.
            </p>
        </div>
        }

        return <div>
            <button className ="link" onClick={() =>{
                this.setState({display:!this.state.display});
            }}><h1>Показать/скрыть блок</h1></button>
            {newsBlock}
        </div>
    }
}