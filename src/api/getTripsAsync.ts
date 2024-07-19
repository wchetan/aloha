const getTripsAsync = (): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    const trips = [
      {id: 1, destination: 'New York', duration: 7},
      {id: 2, destination: 'Paris', duration: 10},
      {id: 3, destination: 'Tokyo', duration: 14},
    ];

    resolve(trips);
  });
};

export default getTripsAsync;
