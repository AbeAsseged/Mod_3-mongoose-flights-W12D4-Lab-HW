const React = require("react")

class New extends React.Component {
  render() {
    const date = new Date();
    const futureDate = date.getDate() + 365;
    date.setDate(futureDate);
    const defaultValue = date.toLocaleDateString('en-CA');
    return (
      <div>
        <h1>New Flight Page</h1>

        <form action="/flights" method="POST">
          Airline: <input type="text"  name="airline" /> <br />
          FlightNo: <input type="number" name="flightNo" min= {10}  max= {9999} /> <br />
          Departs: <input type="datetime-locale" name="departs" defaultValue={defaultValue} /> <br />
          Airport: <select name= "airport" defaultValue={'SAN'}>
            <option value = "SAN">SAN</option>
            <option value = "AUS">AUS</option>
            <option value = "DAL">DAL</option>
            <option value = "LAX">LAX</option>
            <option value = "SEA">SEA</option>
          </select><br />
          <input type="submit" value="Submit New Flight" />
        </form>
        <nav>
           <a href="/flights">Back</a>
        </nav>
      </div>
    )
  }
}

module.exports = New

















// part 1

// onst React = require("react")

// class New extends React.Component {
//   render() {
//     const date = new Date();
//     const futureDate = date.getDate() + 365;
//     date.setDate(futureDate);
//     const defaultValue = date.toLocaleDateString('en-CA');
//     return (
//       <div>
//         <h1>New Flight Page</h1>

//         <form action="/flights" method="POST">
//           Airline: <input type="text"  name="airline" /> <br />
//           FlightNo: <input type="number" name="flightNo" min= {10}  max= {9999} /> <br />
//           Departs: <input type="datetime-locale" name="departs" defaultValue={defaultValue} /> <br />
          
//           <input type="submit" value="Submit New Flight" />
//         </form>
//         <nav>
//            {/* <a href="/flights">Back</a> */}
//         </nav>
//       </div>
//     )
//   }
// }

// module.exports = New