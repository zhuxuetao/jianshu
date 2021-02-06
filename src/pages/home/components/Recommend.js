import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
	RecommendWrapper,
	DownloadWrapper,
	DownloadInfoWrapper,
	RecommendItem
} from '../style'
class Recommend extends PureComponent {
	render() {
		return (
			<RecommendWrapper>
				{
					this.props.RecommendList.map((item, index) => (
						<RecommendItem key={index} imgUrl={item} />
					))
				}
				<DownloadWrapper>
					<img className="qrcode" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="" />
					<DownloadInfoWrapper>
						<h3 className="title">下载简书手机App ></h3>
						<p className="desc">随时随地发现和创作内容</p>
					</DownloadInfoWrapper>
				</DownloadWrapper>

			</RecommendWrapper>
		)
	}
};

const mapStateToprops = (state) => ({
	"RecommendList": state.getIn(['home', 'RecommendList'])
});

export default connect(mapStateToprops, null)(Recommend);