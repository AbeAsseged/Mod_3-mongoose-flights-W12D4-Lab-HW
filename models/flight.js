const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema(
  {
    airline: { type: String, required: true, enum: ['American', 'Southwest', 'United'] },
    flightNo: { type: Number, required: true, min: 10,  max: 9999, },
    departs: { type: Date, default:Date.now() },
    airport:{ type: String, enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'] , default: 'SAN'},
    destination: {
          type: [Schema.Types.ObejectId], ref: 'Destination', 
    }
  },
  {
    timestamps: true,
  }
);

const Flight = model('Flight', flightSchema);

module.exports = Flight;























// part 1

// const mongoose = require('mongoose');

// const flightSchema = new mongoose.Schema(
//   {
//     airline: { type: String, required: true, enum: ['American', 'Southwest', 'United'] },
//     flightNo: { type: Number, required: true, min: 10,  max: 9999, },
//     departs: { type: Date, default:Date.now() }
//   },
//   {
//     timestamps: true,
//   }
// );

// const Flight = mongoose.model('Flight', flightSchema);

// module.exports = Flight;