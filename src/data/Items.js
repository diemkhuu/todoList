import { v4 as uuidv4 } from "uuid";

const Items = [
  {
    id: uuidv4(),
    name: " Tạo Agenda",
    level: 2, // high
  },
  {
    id: uuidv4(),
    name: "Chuẩn bị project demo",
    level: 0, // low
  },
  {
    id: uuidv4(),
    name: "Tạo slide",
    level: 1, // medium
  },
  // {
  //   name: "Thuyết trình",
  //   level: 0, // low
  // },
];

export default Items;
