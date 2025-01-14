// Code your solution in this file!
function logDriverNames(drivers) { drivers.forEach( function(driver ) {
    console.log(driver.name)
    });

}

function logDriversByHometown(drivers,location) { drivers.forEach( function(driver) {
    if (driver.hometown === location) {
        console.log(driver.name)
        }
    })
};

function driversByRevenue(drivers) {
    let newDrivers = drivers.slice()
    return newDrivers.sort(function(a, b) {
    // console.log(a.revenue)
    // console.log(b.revenue)
    return a.revenue - b.revenue
    } ); 
}

const driversByName = function (drivers) {
    return drivers.slice().sort(function (driverOne, driverTwo) {
      return driverOne.name.localeCompare(driverTwo.name);
    });
  };

function totalRevenue(drivers) {
    return drivers.reduce( function(total, driver, i, drivers ) {
       return total += driver.revenue
    }, 0 )
};

function averageRevenue(drivers) {
    return totalRevenue(drivers)/drivers.length
}