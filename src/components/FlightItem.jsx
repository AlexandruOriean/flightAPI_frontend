import React from 'react';


const data = {
  flight: {
    from: 'Bucharest',
    to: 'London',
    price: 55,
    deprtureDate: '2020-11-10',
    departureTime: '09:30:00',
    arrivalTime: '11:30:00'
  }
}

export const FlightItem = () => {
  return (
    <div>
      <tr>
        <td>{data.flight.from}</td>
        <td>{data.flight.to}</td>
        <td>{data.flight.price}</td>
        <td>{data.flight.deprtureDate}</td>
        <td>{data.flight.departureTime}</td>
        <td>{data.flight.arrivalTime}</td>
      </tr>
    </div>
  )
}