const React = require("react")


class Index extends React.Component {
  render() {
    const { flights } = this.props
    return(
      <div>
        <h1> Flights Index Page </h1>
        <nav>
          <a href="/flights/new">Create a New Flight </a>
        </nav>
        <ul>
          {
            flights.map((flight, i) => {
              return (
                <li key={i}>
                  The{' '}
                  <a href={`/flights/${flight._id}`}> 
                    {/* <a href={`/flights/${i}`}> for w/out mongoDb  */}
                      {flight.airline}
                    </a>
                    {' '}
                    is {flight.flightNo} <br></br>
                    {' '}
                      {flight.departure}  
                    
                    
                                      <br />
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

module.exports = Index