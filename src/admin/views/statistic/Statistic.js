import { LoadingOutlined } from '@ant-design/icons'
import { cilCloudDownload } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CButton, CButtonGroup, CCard, CCardBody, CCardFooter, CCol, CFormSelect, CRow } from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { Spin } from 'antd'
import moment from 'moment'
import React, { lazy, useEffect, useState } from 'react'
import { getRevenue } from '../../../api/adminApi.js'
import numberSeparator from '../../../helpers/validating/numberSeparator'

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))

const Statistic = () => {
  const [statistics, setStatistics] = useState([])
  const [totalAmount, setTotalAmount] = useState([])
  const [orderCount, setOrderCount] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getRevenue({ from: moment().subtract(30, 'day'), to: moment() }).then((response) => {
      // console.log('datane', response.data)
      setTotalAmount(response.data.totalAmount)
      setOrderCount(response.data.orderCount)
      setStatistics(response.data.statistics)
    })
  }, [])

  return (
    <>
      <div className='mb-3' id='changeProduct'>
        <CFormSelect
          aria-label='Default select example'
          onChange={(e) => {
            setLoading(true)
          }}
        ></CFormSelect>
      </div>
      <Spin indicator={antIcon} spinning={loading}>
        <CCard className='mb-4'>
          <CCardBody>
            <CRow>
              <CCol sm={5}>
                <h4 id='traffic' className='card-title mb-0'>
                  Doanh thu bán hàng
                </h4>
                <div className='small text-medium-emphasis'>
                  Tổng doanh thu:{numberSeparator(totalAmount)} VNĐ
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
                      active={value === 'Ngày'}
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
                      active={value === 'Ngày'}
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
      </Spin>
    </>
  )
}

export default Statistic
