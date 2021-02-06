import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './style.js';
import GlobalIconFont from './statics/iconfont/iconfont.js'

// import * as rrweb from 'rrweb';
// import 'rrweb.css';

// let events = [];
// rrweb.record({
//     emit(event) {
//         // 用任意方式存储 event
//         events.push(event);
//     }
// });



// setTimeout(() => {
//     console.log("------");
//     const replayer = new rrweb.Replayer(events);
//     replayer.play();
// },10000)




let Creator = (
    <Fragment>
        <GlobalStyle />
        <GlobalIconFont />
        <App />
    </Fragment>
)
ReactDOM.render(Creator, document.getElementById('root'));
