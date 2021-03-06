import React from 'react'
import { render } from 'react-dom'
import { connect } from 'dva'
import {Carousel, WingBlank} from 'antd-mobile'
import style from './index.less'

class Ad extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI']
    }
  }

  render(){
    return (
        <Carousel autoplay={true} infinite={true} selectedIndex={0} swipeSpeed={35}
                  beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                  afterChange={index => console.log('slide to', index)}>
          {this.state.data.map(ii => (
            <a href="http://www.baidu.com" key={ii}>
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${ii}.png`}
                alt=""
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                }}
                className={style.ad_full_screen}
              />
            </a>
          ))}
        </Carousel>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Ad)
