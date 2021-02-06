import styled from 'styled-components';
import logoPic from '../../statics/logo.png';


export const HeaderWrapper = styled.div`
    height:58px;
    border-bottom: 1px solid #f0f0f0;
    position:relation;
`;
export const Logo = styled.div` 
    display:block;
    position:absolute;
    left:0;
    top:1px;
    width:100px;
    height:56px;
    background:url(${logoPic});
    background-size:contain;
`;

export const Nav = styled.div` 
    width:960px;
    padding-right:70px;
    box-sizing:border-box;
    margin:0 auto;
    height:100%;
`;

export const NavItem = styled.div`
    line-height:58px;
    padding:0 15px;
    font-size:17px;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
`;
export const SearchWrapper = styled.div`
    float:left;
    position:relative;
    
    .zoom {
        position:absolute;
        right:5px;
        bottom:4px;
        width:30px;
        line-height:30px;
        text-align:center;
        border-radius:50%;
        &.focused {
            background:#777;
            color:#fff;
        }
    }
`;

export const NavSearch = styled.input.attrs({
	placeholder: "搜索"
})`
    width:160px;
    height:38px;
    margin-top:9px;
    margin-left:20px;
    padding:0 30px 0 20px;
    box-sizing:border-box;
    border:none;
    outline:none;
    border-radius:19px;
    background:#eee;
    font-size:14px;
    color:#777;
    &::placeholder{
        color:#999;
    }
    &.slide-enter {
        width:160px;
        transition:all .2s ease-out;
    }
    &.slide-enter-action{
        width:240px;
    }
    &.slide-exit {
        transition:all .2s ease-out;
    }
    &.slide-exit-action{
        width:160px;
    }
    &.focused {
        width:240px;
    }
`;
export const SearchInfo = styled.div`
    position:absolute;
    left:0;
    top:56px;
    width:240px;
    padding:0 20px;
    background:#fff;
    box-shadow:0 0 8px rgba(0,0,0,.2);

    z-index:1;
`;
export const SearchInfoTitle = styled.div`
    margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
`;
export const SearchInfoSwitch = styled.span`
    float:right;
		font-size:13px;
		cursor:pointer;
		.spin {
			display:block;
			float:left;
			font-size:10px;
			margin-right:5px;	
			transition:all .2s ease-in;			
			transform-origin:center center;			
		}		
`;
export const SearchInfoList = styled.div`
    overflow:hidden;
`;	
export const SearchInfoItem = styled.a`
	font-size:12px;
	padding:0 5px;
	line-height:20px;
	border:1px solid #ddd;
	color:#787878;
	border-radius:3px;
	display:block;
	float:left;
	margin-right:10px;
	margin-bottom:15px;
`;


export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
    height:58px;
`;
export const Button = styled.div`
    float:right;
    line-height:38px;
    border-radius:19px;
    margin-right:20px;
    padding:0 20px;
    margin-top:10px;
    border:1px solid #ec6149;
    font-size:14px;
    &.reg{
        color:#ec6149;
    }
    &.writting{
        color:#fff;
        background:#ec6149;
    }
`;


