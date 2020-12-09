const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const result = this.journeys.map((journey) => {
    return journey.startLocation;
  });
  return result;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const result = this.journeys.map((journey) => {
    return journey.endLocation;
  });
  return result;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const result = this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
  return result;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  });
  return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total + journey.distance
  }, 0);
};

// Traveller.prototype.getUniqueModesOfTransport = function () {
//   const results = this.journeys.filter((journey) => {
//     if (this.results.some(result) => {
//       return result
//     }
//   });
//   return results;
// };

// Traveller.prototype.getUniqueModesOfTransport = function () {
//   const results = []
//   this.journeys.forEach(journey) => {
//     if (this.results.some(journey
  // }
// };

module.exports = Traveller;
