import React from 'react'
import ReactDOM from 'react-dom'
import HotApp from './components/HotApp'

export async function bootstrap(props) {
    console.log('react app bootstraped');
}
export async function mount(props) {
    console.log(props.container)
    ReactDOM.render(<HotApp/>, props.container)
}
export async function unmount(props) {
    ReactDOM.unmountComponentAtNode(props.container)
}