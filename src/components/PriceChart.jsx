import React, { useState, useEffect } from 'react'

import { CButton, CButtonGroup, CCard, CCardBody, CCol, CRow } from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import { getFlexPrice } from '../api/userApi'
import moment from 'moment'

const PriceChart = ({ productId }) => {
  const [statistics, setStatistics] = useState([])

  useEffect(() => {
    if (productId != '') {
      getFlexPrice(productId, { from: moment().subtract(30, 'day'), to: moment() }).then(
        (response) => {
          setStatistics(response.data)
        }
      )
    }
  }, [productId])

  return (
    <>
      <CCard className='mb-4'>
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id='traffic' className='card-title mb-0'>
                Biến động giá sản phẩm
              </h4>
            </CCol>
            <CCol sm={7} className='d-none d-md-block'>
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
              labels: statistics ? statistics.map((statistic) => statistic.capturedTime) : '',
              datasets: [
                {
                  label: 'Giá',
                  backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: statistics ? statistics.map((statistic) => statistic.price) : '',
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
      </CCard>
    </>
  )
}

export default PriceChart
