const React = require('react')

class Show extends React.Component {
  render () {
    const { flight } = this.props;

    return (
      <div>
        <h1> Flight Show Page </h1>
        <p>Airline: {flight.airline}</p>
        <p>Flight Number: {flight.flightNo}</p>
        <p>Departs: {flight.departs}</p>
        <p>Airport: {flight.airport}</p>
        <p>Destination: {flight.Destination.arrival}</p>
        <p>Airline: {flight.airline}</p>
        <form action={`/flights/${this.props.flight._id}?_method=put`} method="POST">
            Destination:{" "}
            <select name = "airport">
                <option value = "SAN">SAN</option>
                <option value = "AUS">AUS</option>
                <option value = "DAL">DAL</option>
                <option value = "LAX">LAX</option>
                <option value = "SEA">SEA</option>
            </select>
            <Input type="datetime-local" name="arrival" />
            <Input type="submit" value="Submit New Destination" />
        </form>

      </div>
    );
  }
}

module.exports = Show;







// const React = require('react')

// class Show extends React.Component {
//   render () {
//     const {airline, flightNo, departs} = this.props.flight

//     return (
//       <div>
//         <h1> Flight Show Page </h1>
//         {airline} flight number {flightNo} has a departure of {departs}.
//         <nav>
//             <a href="/flights">Return to All Flights List</a>
//         </nav>
        
//       </div>
//     );
//   }
// }

// module.exports = Show;