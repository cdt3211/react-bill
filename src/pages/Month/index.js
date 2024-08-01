import { NavBar, DatePicker } from 'antd-mobile'
import './index.scss'
import { useMemo, useState } from 'react'
import classNames from 'classnames'
import dayjs from 'dayjs'
import { useSelector } from 'react-redux'
import _ from 'lodash'

const Month = () => {
  //按月数据分组
  const billList = useSelector(state => state.bill.billList)
  const MonthGroup = useMemo(()=>{
    return _.groupBy(billList,(item)=> dayjs(item.date).format('YYYY-MM'))
  },[billList])
  console.log(MonthGroup)
  //弹窗打开关闭
  const [dateVisible,setDateVisible] = useState(false)
  //控制时间显示
  const [currentDate, setCurrentDate] = useState(()=>{
      return dayjs(new Date()).format('YYYY-MM')
  })
  //时间选择器确认
  const onConfirm = (date)=>{
      setDateVisible(false)
      console.log(date)
      const formateDate = dayjs(date).format('YYYY-MM')
      setCurrentDate(formateDate)
  }
  return (
    <div className="monthlyBill">
      <NavBar className="nav" backArrow={false}>
        月度收支
      </NavBar>
      <div className="content">
        <div className="header">
          {/* 时间切换区域 */}
          <div className="date" onClick={() => setDateVisible(true)}>
            <span className="text">
              {currentDate + ''}月账单
            </span>
            <span  className={classNames('arrow',dateVisible && 'expand')}></span>
          </div>
          {/* 统计区域 */}
          <div className='twoLineOverview'>
            <div className="item">
              <span className="money">{100}</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">{200}</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">{200}</span>
              <span className="type">结余</span>
            </div>
          </div>
          {/* 时间选择器 */}
          <DatePicker
            className="kaDate"
            title="记账日期"
            precision="month"
            visible={dateVisible}
            // onCancel={() => setDateVisible(false)}
            onConfirm={onConfirm}
            onClose={() => setDateVisible(false)}
            max={new Date()}
          />
        </div>
      </div>
    </div >
  )
}

export default Month