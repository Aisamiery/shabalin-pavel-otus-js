import React, { SyntheticEvent } from 'react';
import { render } from 'react-dom';

interface iState {
    items: string[],
    msg: string
}

class ToDoComponent extends React.Component<any, iState> {
    constructor(props: any) {
        super(props);
        this.state = {items: [], msg: ''};

        this.onChangeEvent = this.onChangeEvent.bind(this);
        this.onClickEvent = this.onClickEvent.bind(this);
        this.onDeleteItem = this.onDeleteItem.bind(this);
    }

    onChangeEvent(e: SyntheticEvent) {
        this.setState({msg: e.target.value})
    }

    onClickEvent(e: SyntheticEvent) {
        let newItems = this.state.items;
        newItems.push(this.state.msg);
        this.setState({msg: ''});
        this.setState({items: newItems})
    }

    onDeleteItem(item: string) {
        // ищем индекс по строке и удаляем
        let ind = this.state.items.indexOf(item);

        if (ind >= 0) {
            let newItems = this.state.items;
            newItems.splice(ind, 1);
            this.setState({items: newItems});
        }
    }

    render() {
        return(
            <div>
                <h2>ToDo List</h2>
                <div className="group-action" style={ {margin: '30px 0'} }>
                    <input type="text" style={ {display: 'inline-block'} } onChange={this.onChangeEvent} value={this.state.msg}/>
                    <button type="button" onClick={this.onClickEvent}>Add</button>
                </div>
                <ul>
                    {this.state.items.map(item => <li key={item} onClick={ () => this.onDeleteItem(item) }>{item}</li>)}
                </ul>
            </div>
        )
    }
}

render(<ToDoComponent />, document.getElementById('root'));