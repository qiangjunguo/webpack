import _ from 'lodash'
import printMe from "./print.js";

//静态引入
// function component() {
//     const element = document.createElement('div');
//     element.innerHTML = _.join(['Hello', 'webpack'], '')
//
//     const btn = document.createElement('button');
//     btn.innerHTML = '点我执行print';
//     btn.onclick = printMe;
//
//     element.appendChild(btn)
//     return element;
// }
//
// document.body.appendChild(component())

//动态导入
async function getComponent() {
    const element = document.createElement('div')

    //
    // return import('lodash')
    //     .then(({default: _}) => {
    //         const element = document.createElement('div')
    //         element.innerHTML = _.join(['Hello', 'Webpack'], '')
    //         return element
    //     })
    //     .catch((error) => {
    //         console.log('错误', error)
    //     })

    const {default: _} = await import('lodash')
    element.innerHTML = _.join(['Hello', 'Webpack'], '')
    return element

}

getComponent().then((component) => {
    document.body.appendChild(component)
})