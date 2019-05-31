import React, {Component} from 'react';
import {data} from '../data/data'
import '../asset/scss/_init.scss'

class TeeList extends Component {
    state = {
        list: data
    }
    toggle = (id) => {
        const {list} = this.state
        const index = list.findIndex((item) => item.id === id)
        if (index > -1) {
            list[index].activate = !list[index].activate
            this.setState({list: list})
        }

    }

    render() {
        console.log(this.state.list)
        return (
            <div>
                <h3>List</h3>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (

                                <li onClick={() => this.toggle(item.id)} key={index}>
                                    { item.activate ? <i className="far fa-minus-square"/> : <i className="far fa-plus-square"/>}
                                    <span> {item.title}</span>
                                    {item.children.map((child, key) => {
                                        return <ul className={item.activate ? 'active' : 'inactive'}>
                                            <li key={key}>
                                                <span> {child.title}</span>
                                            </li>
                                        </ul>
                                    })}

                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default TeeList;