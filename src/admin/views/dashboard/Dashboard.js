import { cilCloudDownload } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CButton, CButtonGroup, CCard, CCardBody, CCardFooter, CCol, CRow } from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import moment from 'moment'
import React, { lazy, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getRevenue } from '../../../api/adminApi.js'
import numberSeparator from '../../../helpers/validating/numberSeparator'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))

const Dashboard = () => {
  const navigate = useNavigate()
  const [statistics, setStatistics] = useState([])
  const [totalAmount, setTotalAmount] = useState([])
  const [orderCount, setOrderCount] = useState([])
  const [time, setTime] = useState('Ngày')
  useEffect(() => {
    getRevenue({ from: moment().subtract(30, 'day'), to: moment() })
      .then((response) => {
        // console.log('datane', response.data)
        setTotalAmount(response.data.totalAmount)
        setOrderCount(response.data.orderCount)
        setStatistics(response.data.statistics)
      })
  }, [])
  const handleChangeTime = (value) => {
    setTime(value)
    if (value === 'Tháng') {
      navigate('/seller/by-month', { replace: true })

    }
    else if (value === 'Ngày' || value === 'Năm') {
      navigate('/seller')
    }
    setTime(value)
  }
  return (
    <>
      <CCard className='mb-4'>
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id='traffic' className='card-title mb-0'>
                Doanh thu bán hàng
              </h4>
              <div className='small text-medium-emphasis'>
                Tổng doanh thu: {numberSeparator(totalAmount)} VNĐ
              </div>
            </CCol>
            <CCol sm={7} className='d-none d-md-block'>
              <CButton color='primary' className='float-end'>
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className='float-end me-3'>
                {['Ngày', 'Tháng', 'Năm'].map((value) => (
                  <CButton
                    color='outline-secondary'
                    key={value}
                    className='mx-0'
                    active={value === time}
                    onClick={() => handleChangeTime(value)}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: statistics ? statistics.map((statistic) => statistic.date) : [],
              datasets: [
                {
                  label: 'Doanh thu',
                  backgroundColor: 'rgba(75,192,192,0.4)',
                  borderColor: 'rgba(75,192,192,1)',
                  pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                  borderWidth: 2,
                  data: statistics ? statistics.map((statistic) => statistic.totalAmount) : [],
                  fill: true,
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>
        <CCardFooter></CCardFooter>
      </CCard>

      <CCard className='mb-4'>
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id='traffic' className='card-title mb-0'>
                Số lượng đơn hàng
              </h4>
              <div className='small text-medium-emphasis'>Tổng đơn hàng: {orderCount}</div>
            </CCol>
            <CCol sm={7} className='d-none d-md-block'>
              <CButton color='primary' className='float-end'>
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className='float-end me-3'>
                {['Ngày', 'Tháng', 'Năm'].map((value) => (
                  <CButton
                    color='outline-secondary'
                    key={value}
                    className='mx-0'
                    active={value === time}
                    onClick={() => handleChangeTime(value)}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: statistics ? statistics.map((statistic) => statistic.date) : [],
              datasets: [
                {
                  label: 'Số đơn hàng',
                  backgroundColor: 'rgba(75,192,192,0.4)',
                  borderColor: 'rgba(75,192,192,1)',
                  pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                  borderWidth: 2,
                  data: statistics ? statistics.map((statistic) => statistic.orderCount) : [],
                  fill: true,
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>
        <CCardFooter></CCardFooter>
      </CCard>
      <WidgetsDropdown />
    </>
  )
}

export default Dashboard
