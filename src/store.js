import { proxy } from "valtio";

const state = proxy({
  colors: ["#EAEAEA", "#EFBD4E", "#80C670", "#726DE8", "#EF674E", "#353934"],
  color: ["white"],
  diamod: [{ color: "white", pos: 0.1, id: 0 }],
  selectedID: -1,
});

export { state };
