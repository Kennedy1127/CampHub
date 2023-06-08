export const state = {
  rooms: {
    upperValley: {
      title: "Upper Valley",
      imgs: [
        {
          pic: "./../../src/img/campgrounds/rooms/room-1/room-1-1-min.jpg",
          picMobile:
            "./../../src/img/campgrounds/rooms/room-1/room-1-1-min.webp",
        },
        {
          pic: "./../../src/img/campgrounds/rooms/room-1/room-1-2-min.jpg",
          picMobile:
            "./../../src/img/campgrounds/rooms/room-1/room-1-2-min.webp",
        },
        {
          pic: "./../../src/img/campgrounds/rooms/room-1/room-1-3-min.jpg",
          picMobile:
            "./../../src/img/campgrounds/rooms/room-1/room-1-3-min.webp",
        },
        {
          pic: "./../../src/img/campgrounds/rooms/room-1/room-1-4-min.jpg",
          picMobile:
            "./../../src/img/campgrounds/rooms/room-1/room-1-4-min.webp",
        },
        {
          pic: "./../../src/img/campgrounds/rooms/room-1/room-1-5-min.jpg",
          picMobile:
            "./../../src/img/campgrounds/rooms/room-1/room-1-5-min.webp",
        },
      ],
      price: 99.99,
      rate: 4.7,
      reviews: 3047,
    },
    sunsetLodge: {
      title: "Sunset Lodge",
      imgs: [
        {
          pic: "./../../src/img/campgrounds/rooms/room-2/room-2-1-min.jpg",
          picMobile:
            "./../../src/img/campgrounds/rooms/room-2/room-2-1-min.webp",
        },
        {
          pic: "./../../src/img/campgrounds/rooms/room-2/room-2-2-min.jpg",
          picMobile:
            "./../../src/img/campgrounds/rooms/room-2/room-2-2-min.webp",
        },
        {
          pic: "./../../src/img/campgrounds/rooms/room-2/room-2-3-min.jpg",
          picMobile:
            "./../../src/img/campgrounds/rooms/room-2/room-2-3-min.webp",
        },
        {
          pic: "./../../src/img/campgrounds/rooms/room-2/room-2-4-min.jpg",
          picMobile:
            "./../../src/img/campgrounds/rooms/room-2/room-2-4-min.webp",
        },
        {
          pic: "./../../src/img/campgrounds/rooms/room-2/room-2-5-min.jpg",
          picMobile:
            "./../../src/img/campgrounds/rooms/room-2/room-2-5-min.webp",
        },
      ],
      price: 129.99,
      rate: 4.5,
      reviews: 2215,
    },
  },
};

export const loadSessionRoom = () => {
  const reservationTarget = sessionStorage.getItem("reservationTarget");
  if (!reservationTarget) return state.rooms.upperValley;
  return state.rooms[reservationTarget];
};
