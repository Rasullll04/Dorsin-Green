export default [
  {
    title: "Home",
    path: "#hero",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Services",
    path: "#services",
  },
  {
    title: "Portfolio",
    path: "#portfolio",
  },
  {
    title: "Team",
    path: "#team",
  },
  {
    title: "Dropdown",
    children: [
      {
        title: "Dropdown 1",
        path: "#dropwown1",
      },
      {
        title: "Dropdown 2",
        children: [
          {
            title: "Dropdown 2.1",
            path: "2dropdown2-1",
          },
          {
            title: "Dropdown 2.2",
            path: "2dropdown2-2",
          },
          {
            title: "Dropdown 2.3",
            path: "2dropdown2-3",
          },
        ],
      },
      {
        title: "Dropdown 3",
        path: "#dropwown3",
      },
      {
        title: "Dropdown 4",
        path: "#dropwown4",
      },
    ],
  },
  {
    title: "Contact",
    path: "#contact",
  },
];
