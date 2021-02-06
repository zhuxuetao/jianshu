import React , { PureComponent } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { 
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';

import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';

class Home extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            timer:null
        }
    }
    componentDidMount(){
        const { handlerGetHomeMsg } = this.props;
        handlerGetHomeMsg();
        this.props.handlerGetMsg();
        


        // var MyModules = (function Manager(){
        //     var modules = {};
        //     function define(name,deps,impl){
        //         for(var i = 0; i < deps.length; i++){
        //             deps[i] = modules[deps[i]];
        //         }
        //         modules[name] = impl.apply(impl,deps);
        //     }   
        //     function get (name){
        //         return modules[name];
        //     }
        //     return {
        //         define,
        //         get
        //     }
        // })()

        // MyModules.define('bar',[],function(){
        //     function hello (who){
        //         return "Let me interoduce: "+who;
        //     }
        //     function con(){
        //         console.log("测试");
        //     }
        //     return {
        //         hello,
        //         con
        //     }
        // })     
        // MyModules.define('foo',['bar'],function(bar){
        //     var hungry = "hippo";
        //     function awesome(){
        //         bar.con();
        //         console.log(bar.hello(hungry).toUpperCase());
        //     }

        //     return {
        //         awesome
        //     }
        // })   

        // let bar = MyModules.get('bar');
        // var foo = MyModules.get('foo');

        // console.log(bar.hello('bar'));
        // foo.awesome();

        
        



    }

    bindEvent(){
        const { handlerChangeBackTopShow } = this.props;
        window.onscroll = () => {            
            if(this.state.isOk){
                clearInterval(this.state.timer);
            }
            this.setState({
                isOk:true
            })          

            let sTop = document.documentElement.scrollTop || document.body.scrollTop;
            let Height = window.innerHeight;
            if(sTop > Height){
                handlerChangeBackTopShow(true)
            }else{
                handlerChangeBackTopShow(false)
            }       
            
            if(this.Div){
                this.Div.onclick = () => {
                    this.handlerResetScrollTop();
                }
            }
        }
    }

    handlerResetScrollTop(){
        let ST = document.documentElement.scrollTop || document.body.scrollTop;
        let start = ST;  //起点
        let dis = 0 - start;    //总距离       
        let count = Math.round(3000/30);  //总步数
        let n = 0;     //走到第几步
        
        clearInterval(this.state.timer);
        this.state.timer = setInterval(() => {
            this.setState({
                isOk:false
            })
            n++;
            let a = 1 - n / count;
            //Math.pow(a,3)  实现快到终点减速效果
            let icur = start + dis * (1-Math.pow(a,3));
            document.documentElement.scrollTop = document.body.scrollTop = icur;
            if(n == count){
                clearInterval(this.state.timer);
            }
        },20)

    }
    render(){   
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="" />
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                
                <BackTop className={this.props.BackTopShow ? "BackTopShow" : ""} ref={(Div) => this.Div = Div } > 》</BackTop>
            </HomeWrapper>
        )
    }
};
const mapStateToProps = (state) => ({
    BackTopShow:state.getIn(['home','BackTopShow'])
});

const mapDispatchToProps = (dispatch) => ({
    handlerGetHomeMsg(){        
        dispatch(actionCreators.getHomeInfo())
    },
    handlerChangeBackTopShow(boo){
        dispatch(actionCreators.scrollBackTop(boo))
    },
    handlerGetMsg() {
        dispatch(actionCreators.getMsg())
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Home);