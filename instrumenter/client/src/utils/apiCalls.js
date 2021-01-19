let api = require("./api");

async function getUsersFromApi(minAge, maxAge) {
  const res = await api.get("/users", {
    params: {
      minAge: minAge || "0",
      maxAge: maxAge || "100",
    },
  });

  if (res.status === 200) {
    return res.data.users;
  } else {
    console.log(res.error);
  }
  return [];
}

async function getUsersLocations(minAge, maxAge) {
  const res = await api.get("/users", {
    params: {
      minAge: minAge || "0",
      maxAge: maxAge || "100",
    },
  });

  if (res.status === 200) {
    return res.data.users.map((x) => x.address.city);
  } else {
    console.log(res.error);
  }
  return [];
}

let mockup = {
  status: 200,
  data: {
    users: [
      {
        name: "Jean-Jacques",
        age: 16,
        address: {
          city: "Paris",
          road: "Rue de Rivoli",
        },
        email: "jean-jacques-gauthier@orange.fr",
      },
      {
        name: "Pablo",
        age: 85,
        address: {
          city: "Madrid",
          road: "Calle Gran Via",
        },
        email: "pablo.pescobar@es,pana.com",
      },
      {
        name: "Mark",
        age: 35,
        address: {
          city: "London",
          road: "Brockham road",
        },
        email: "mark1992@hotmail.com",
      },
      {
        name: "Chiara",
        age: 56,
        address: {
          city: "Rome",
          road: "Via del Popolo",
        },
        email: "chiara-.-kiki@libero.it",
      },
      {
        name: "Wang Li",
        age: 22,
        address: {
          city: "Beijing",
          road: "Nanluogu Xiang",
        },
        email: "王力@weibo.cn",
      },
      {
        name: "Ian",
        age: 40,
        address: {
          city: "Berlin",
          road: "Alexanderstrasse",
        },
        email: "ian.alexander@gmail.de",
      },
      {
        name: "Juan",
        age: 68,
        address: {
          city: "Madrid",
          road: "Calle de Acalá",
        },
        email: "juanito@gmail.com",
      },
      {
        name: "Eric",
        age: 41,
        address: {
          city: "Bruxelles",
          road: "Avenue Albert",
        },
        email: "eric-keyser-99@gmail.com",
      },
      {
        name: "Barbara",
        age: 18,
        address: {
          city: "Paris",
          road: "Boulevard Magenta",
        },
        email: "_barbie_girl@yahoo.fr",
      },
    ],
  },
};

module.exports = {
  getUsersFromApi,
  getUsersLocations,
};