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
      features: [
        {
          icon: "./../../src/img/logo/icon/camping.png",
          text: "Tent is strictly essential",
          alt: "camp",
        },
        {
          icon: "./../../src/img/logo/icon/wood.png",
          text: "Free woods provided",
          alt: "wood",
        },
        {
          icon: "./../../src/img/logo/icon/fire.png",
          text: "Campfire is allowed",
          alt: "fire",
        },
        {
          icon: "./../../src/img/logo/icon/barbecue.png",
          text: "BBQ Time",
          alt: "barbecue",
        },
        {
          icon: "./../../src/img/logo/icon/shower.png",
          text: "Take the shower if you need",
          alt: "shower",
        },
        {
          icon: "./../../src/img/logo/icon/pawprint.png",
          text: "Camping with pet",
          alt: "pawprint",
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
      features: [
        {
          icon: "./../../src/img/logo/icon/camping.png",
          text: "Tent is strictly essential",
          alt: "camp",
        },
        {
          icon: "./../../src/img/logo/icon/car.png",
          text: "Car is allowed",
          alt: "car",
        },
        {
          icon: "./../../src/img/logo/icon/wood.png",
          text: "Free woods provided",
          alt: "wood",
        },
        {
          icon: "./../../src/img/logo/icon/fire.png",
          text: "Campfire is allowed",
          alt: "fire",
        },
        {
          icon: "./../../src/img/logo/icon/barbecue.png",
          text: "BBQ Time",
          alt: "barbecue",
        },
        {
          icon: "./../../src/img/logo/icon/shower.png",
          text: "Take the shower if you need",
          alt: "shower",
        },
        {
          icon: "./../../src/img/logo/icon/pawprint.png",
          text: "Camping with pet",
          alt: "pawprint",
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
