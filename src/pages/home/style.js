import styled from 'styled-components'

export const HomeWrapper = styled.div`
	width:960px;
	margin: 0 auto;
	height:300px;
	background:hidden;
`;

export const HomeLeft = styled.div`
	width:625px;
	margin-left:15px;
	padding-top:30px;
	float:left;
	.banner-img {
		width:625px;
		height:270px;
		border-radius:5px;
	}
`;
export const HomeRight = styled.div`
	width:280px;
	float:right;
`;

export const TopicWrapper = styled.div`
	padding: 20px 0 10px 0;
	margin-left:-18px;
	overflow:hidden;
	border-bottom:1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
	margin-left:18px;
	float:left;
	height:32px;
	line-height:32px;
	background:#f7f7f7;
	font-size:14px;
	color:#000;
	border:1px solide #dcdcdc;
	border-radius:4px;
	padding-right:10px;
	margin-bottom:18px;
	img{
		float:left;
		width:32px;
		height:32px; 
		margin-right:10px;
	}
`;


export const ListItem = styled.div`
	padding:20px 0;
	overflow:hidden;
	border-bottom:1px solid #dcdcdc;    
	width:100%;
	.pic {
		width:150px;
		height:100px;
		float:right;
		border-radius:10px;
	}
`;
export const ListInfo = styled.div`
	width: 458px;
	float:left;
	.title{
		line-height:27px;
		font-size:18px;
		font-weight:bold;
		color:#333;
	}
	.desc {
			font-size:13px;
			line-height: 18px;
			color:#999;
	}
`;


export const RecommendWrapper = styled.ul`
	width:280px;
	padding: 30px 0 0;
	margin-top:-4px;
`;
export const DownloadWrapper = styled.div`
	margin-bottom: 30px;
	margin-top:10px;
	padding: 10px 22px;
	width: 234px;
	height:60px;
	border: 1px solid #f0f0f0;
	border-radius: 6px;
	background-color: #fff;
	.qrcode {
		width: 60px;
		height: 60px;
		opacity: .85;
	}
`;
export const DownloadInfoWrapper = styled.div`
	display: inline-block;
	vertical-align: middle;
	margin-left: 15px;
	margin-top:12px;
	vertical-align:top;
	.title {
		font-size: 15px;
		color: #333;
	}
	.desc {
		margin-top: 8px;
		font-size: 13px;
		color: #999;
	}
`;
export const RecommendItem = styled.div`
	width:280px;
	height:50px;
	margin-bottom:8px;
	background:url(${(props) => props.imgUrl});
	background-size:contain;
`;

export const WriterWrapper = styled.div`
	width:280px;
	position:relative;
	.ad-badge {
		width:100%;
		border-radius:5px;
		margin-bottom:20px;
	}
`;
export const WriterListTitle = styled.div`
	font-size: 13px;
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

export const WriterItem = styled.div`
	margin-top: 20px;
	font-size: 13px;
	overflow:hidden;
	img{
		float:left;
		width:48px;
		height:48px;
		border-radius:50%;
	}
`;
export const WriterItemInfo = styled.div`
	float:left;
	margin-left:10px;
	margin-top:5px;
	.title {
		font-size: 14px;
	}
	.desc {
		margin-top: 8px;
		font-size: 12px;
		color: #969696;
	}
`;
export const WriterFollow = styled.div`
	float: right;
	margin-top: 5px;
	padding: 0;
	font-size: 13px;
	color: #42c02e;
`;

export const WriterViewAll = styled.div`
	padding: 12px 7px 12px 12px;
	width: 100%;
	font-size: 13px;
	color: #787878;
	background-color: #f7f7f7;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	margin-top:20px;
	text-align:center;
	cursor:pointer;
	margin-bottom:20px;
	box-sizing: border-box;
`;


export const LoadMore = styled.div`
	width:100%;
	height:40px;
	line-height:40px;
	text-align:center;
	background:#a5a5a5;
	border-radius:20px;
	color:#fff;
	margin: 30px 0;
`;

export const BackTop = styled.div`
	position:fixed;
	right:100px;
	bottom:100px;
	width:60px;
	height:60px;
	line-height:60px;
	text-align:center;
	border:1px solid #ccc;
	font-size:14px;
	transform:rotate(-90deg);
	display:none;
	&.BackTopShow {
			display:block;
	}
`;