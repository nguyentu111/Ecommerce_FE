export const services = [
  {
    title: "Free Shipping",
    tagline: "From all orders over $5",
    image: "images/service.png",
  },

  {
    title: "Daily Surprise Offers",
    tagline: "Save upto 25% off",
    image: "images/service-02.png",
  },
  {
    title: "Support 24/7",
    tagline: "Shop with an expert",
    image: "images/service-03.png",
  },
  {
    title: "Affordable Prices",
    tagline: "Get Factory Default Price",
    image: "images/service-04.png",
  },
  {
    title: "Secure Payments",
    tagline: "100% Protected Payment",
    image: "images/service-05.png",
  },
];
const inner_menu = [
  {
    title: "Airpods",
    link: "/collections/airpods",
    inner: [
      { title: "Cameras & Videos", link: "/collections/cameras-videos" },
      { title: "camera's", link: "/collections/cameras" },
      { title: "Headphones", link: "/collections/headphones" },
      { title: "iPads", link: "/collections/ipads" },
    ],
  },
  {
    title: "Headphones",
    link: "/collections/headphones",
    inner: [
      { title: "mini speaker", link: "/collections/mini-speaker" },
      { title: "Mobile & Tablet", link: "/collections/mobiles-tablets" },
      { title: "Portable Speakers", link: "/collections/portable-speakers" },
      { title: "Music & Gaming", link: "/collections/music-gaming" },
    ],
  },
  {
    title: "IPads",
    link: "/collections/ipads",
    inner: [
      { title: "Accessiories", link: "/collections/accessories" },
      { title: "camera's", link: "/collections/cameras" },
      { title: "Headphones", link: "/collections/headphones" },
      { title: "mini speakers", link: "/collections/mini-speaker" },
    ],
  },
  {
    title: "Laptops",
    link: "/collections/laptops",
    inner: [
      { title: "Smartwatches", link: "/collections/smartwatches" },
      { title: "Smart Television", link: "/collections/smart-television" },
      { title: "smart phones", link: "/collections/smart-phones" },
      { title: "Comuter & Laptop", link: "/collections/computers-laptop" },
    ],
  },
];
export const menu_items = {
  categories: [
    {
      title: "Cameras & Videos",
      link: "/collections/cameras-videos",
      inner: inner_menu.reverse(),
    },
    {
      title: "Computer & Laptop",
      link: "/collections/computers-laptop",
      inner: inner_menu,
    },
    {
      title: "Home Appliances",
      link: "/collections/home-appliances",
      inner: inner_menu.reverse(),
    },
    {
      title: "Handbag",
      link: "/collections/handbag",
    },
    {
      title: "Mobile & Tablets",
      link: "/collections/mobiles-tablets",
    },
    {
      title: "SmartPhone",
      link: "/collections/smart-phones",
    },
    {
      title: "Portable Speakers",
      link: "/collections/portable-speakers",
    },
    {
      title: "Music & Gaming",
      link: "/collections/music-gaming",
    },
  ],
  navbars: [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Our Store",
      link: "/",
    },
    {
      title: "Blogs",
      link: "/",
    },
    {
      title: "Contact",
      link: "/",
    },
  ],
};
export const collection_cards = [
  {
    title: "Music & Gaming",
    num: 10,
    img: "images/handheld.png",
  },
  {
    title: "Smart Tv",
    num: 12,
    img: "images/tv.jpg",
  },
  {
    title: "Music & Gaming",
    num: 10,
    img: "images/handheld.png",
  },
  {
    title: "Music & Gaming",
    num: 10,
    img: "images/handheld.png",
  },
  {
    title: "Music & Gaming",
    num: 10,
    img: "images/handheld.png",
  },
  {
    title: "Music & Gaming",
    num: 10,
    img: "images/handheld.png",
  },
  {
    title: "Music & Gaming",
    num: 10,
    img: "images/handheld.png",
  },
  {
    title: "Music & Gaming",
    num: 10,
    img: "images/handheld.png",
  },
  {
    title: "Music & Gaming",
    num: 10,
    img: "images/handheld.png",
  },
  {
    title: "Music & Gaming",
    num: 10,
    img: "images/handheld.png",
  },
];
