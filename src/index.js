import _ from 'lodash'
//加载样式
import './style.css'
//加载图片
import Icon from './assets/sheep.webp'
//加载数据
import DataCsv from './assets/data/data.csv'
import DataXml from './assets/data/data.xml'

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], '')
    element.classList.add('hello')

    //加载图片
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon)

    //加载数据
    console.log(DataCsv);
    console.log(DataXml);
    return element;
}

document.body.appendChild(component())