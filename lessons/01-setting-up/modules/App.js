import React from 'react'
import './../public/index.less'

export default React.createClass({
  render() {
    return (
        <div id='root' className='root'>
          <div>Hello, React Router!</div>
          <p className='name'>第一个react router应用</p>
          <p className='date'>
              2018年3月20日
              <span>星期二 上午 <a href="#">10点</a></span>
          </p>
          <p className='tips'>新增</p>
	</div>
    )
  }
})
