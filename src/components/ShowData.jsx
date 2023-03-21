import { Typography } from '@mui/material'
import React from 'react'
import Table from 'react-bootstrap/Table'

const ShowData = ({ getData }) => {
  return (
    <div className='tables'>
      {getData ?
        getData.map((data) =>
          <>
            <Table className='col' bordered  >
              <thead>
                <tr className='tab1' >
                  <th colSpan={2}>Date : {data.dt_txt} </th>
                </tr>
                <tr className='tab2' >
                  <th colSpan={2}>Temperature</th>
                </tr>
              </thead>
              <tbody>
                <tr className='tab2'  >
                  <td>Min</td>
                  <td>Max</td>
                </tr>
                <tr className='tab2'  >
                  <td>{data.main.temp_min}</td>
                  <td>{data.main.temp_max}</td>
                </tr>
                <tr className='tab3' >
                  <td>Pressure</td>
                  <td>{data.main.pressure}</td>
                </tr>
                <tr className='tab3' >
                  <td>Humidity</td>
                  <td>{data.main.humidity}</td>
                </tr>
              </tbody>
            </Table>
          </>
        )
        : <Typography></Typography>} </div>
  )
}

export default ShowData