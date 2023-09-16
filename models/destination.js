const { Schema, model } = require('mongoose');

const destinationSchema = new Schema(
    {
        airport:{ type: String, enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'] },
        arrival: {type: Date} 
    },

    {
        timestamps: true,   
    }
     
)

const destination =model('Destination', destinationSchema)
model.exports = Destination;
