import React from 'react'
import { render } from 'react-dom'
import { connect } from 'dva'
import Ad from './Ad'
import style from './index.less'

class Index extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div>
        <div className={style.cityPosition}><div className={style.icon_position}></div>杭州</div>
        <Ad />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Index)
