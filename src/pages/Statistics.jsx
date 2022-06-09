import React ,{ useEffect, useState }from 'react'
import Layout from '../layout/Layout'
import { LoadingOutlined } from '@ant-design/icons'
import { cilCloudDownload } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CButton, CButtonGroup, CCard, CCardBody, CCardFooter, CCol, CFormSelect, CRow } from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { Spin, Typography } from 'antd'
import numberSeparator from '../helpers/validating/numberSeparator'
import {getMyRevenue} from '../api/userApi'
import moment from 'moment'
const { Title } = Typography

const Statistics=()=> {
  const [statistics, setStatistics] = useState([])
  const [totalAmount, setTotalAmount] = useState([])
  const [orderCount, setOrderCount] = useState([])
  const [loading, setLoading] = useState(true)
  const userId=localStorage.getItem('userId')
  useEffect(() => {
    setLoading(true)
    if(userId) {
      getMyRevenue(userId, { from: moment().subtract(30, 'day'), to: moment() })
      .then((response) => {
        setTotalAmount(response.data.totalAmount)
        setOrderCount(response.data.orderCount)
        setStatistics(response.data.statistics)
        setLoading(false);
  
      })
      .catch((error) => {
        setLoading(false);
      })
    }
  },[])
  return (
   <Layout>
      <div className='container page-wishlist' style={{ minHeight: '650px' }}>
      <div className='row'>
          <div className='col-12 page-title'>
            <h3>Chi tiêu cá nhân</h3>
            <hr />
          </div>
        </div>
        <div>
        <Spin spinning={loading}>
        {statistics && statistics.length > 0 ? (
          <div>
            <CCard className="mb-4">
              <CCardBody>
                <CRow>
                  <CCol sm={5}>
                    <Title level={3}> Số lượng chi tiêu</Title>
                    <div className="small text-medium-emphasis">
                      Tổng chi tiêu {numberSeparator(totalAmount)} VNĐ
                    </div>
                  </CCol>
                  <CCol sm={7} className="d-none d-md-block">
                    <CButton color="primary" className="float-end">
                      <CIcon icon={cilCloudDownload} />
                    </CButton>
                    <CButtonGroup className="float-end me-3">
                      {['Ngày', 'Tháng', 'Năm'].map((value) => (
                        <CButton color="outline-secondary" key={value} className="mx-0" active={value === 'Ngày'}>
                          {value}
                        </CButton>
                      ))}
                    </CButtonGroup>
                  </CCol>
                </CRow>
                <CChartLine
                  style={{ height: '300px', marginTop: '40px' }}
                  data={{
                    labels: statistics ? statistics.map((statistic) => statistic.date) : '',
                    datasets: [
                      {
                        label: 'Chi tiêu',
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        borderWidth: 2,
                        data: statistics ? statistics.map((statistic) => statistic.totalAmount) : '',
                        fill: true
                      }
                    ]
                  }}
                  options={{
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        display: false
                      }
                    },
                    scales: {
                      x: {
                        grid: {
                          drawOnChartArea: false
                        }
                      },
                      y: {
                        ticks: {
                          beginAtZero: true,
                          maxTicksLimit: 5,
                          stepSize: Math.ceil(250 / 5),
                          max: 250
                        }
                      }
                    },
                    elements: {
                      line: {
                        tension: 0.4
                      },
                      point: {
                        radius: 0,
                        hitRadius: 10,
                        hoverRadius: 4,
                        hoverBorderWidth: 3
                      }
                    }
                  }}
                />
              </CCardBody>
              <CCardFooter></CCardFooter>
            </CCard>

            <CCard className="mb-4">
              <CCardBody>
                <CRow>
                  <CCol sm={5}>
                    <Title level={3}>Số lượng đơn hàng</Title>
                    <div className="small text-medium-emphasis">Tổng đơn hàng: {orderCount}</div>
                  </CCol>
                  <CCol sm={7} className="d-none d-md-block">
                    <CButton color="primary" className="float-end">
                      <CIcon icon={cilCloudDownload} />
                    </CButton>
                    <CButtonGroup className="float-end me-3">
                      {['Ngày', 'Tháng', 'Năm'].map((value) => (
                        <CButton color="outline-secondary" key={value} className="mx-0" active={value === 'Ngày'}>
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
                        fill: true
                      }
                    ]
                  }}
                  options={{
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        display: false
                      }
                    },
                    scales: {
                      x: {
                        grid: {
                          drawOnChartArea: false
                        }
                      },
                      y: {
                        ticks: {
                          beginAtZero: true,
                          maxTicksLimit: 5,
                          stepSize: Math.ceil(250 / 5),
                          max: 250
                        }
                      }
                    },
                    elements: {
                      line: {
                        tension: 0.4
                      },
                      point: {
                        radius: 0,
                        hitRadius: 10,
                        hoverRadius: 4,
                        hoverBorderWidth: 3
                      }
                    }
                  }}
                />
              </CCardBody>
            </CCard>
          </div>
        ) : (
          <h3>Bạn chưa có chi tiêu nào</h3>
        )}
      </Spin>
        </div>
      </div>
   </Layout>
  )
}

export default Statistics;
