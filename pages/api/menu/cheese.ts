import type { NextApiRequest, NextApiResponse } from "next";

interface ResType {
  id: number;
  calorie: number;
  eng_name: string;
  img: string;
  name: string;
  summary: string | null;
}

const cheese = (req: NextApiRequest, res: NextApiResponse<ResType[]>) => {
  res.status(200).json([
    {
      id: 0,
      calorie: 35.3,
      eng_name: "American Cheese",
      img: "https://www.subway.co.kr/../images/menu/img_recipe_c01.jpg",
      name: "아메리칸 치즈",
      summary: null,
    },
    {
      id: 1,
      calorie: 53.6,
      eng_name: "Shredded Cheese",
      img: "https://www.subway.co.kr/../images/menu/img_recipe_c02.jpg",
      name: "슈레드 치즈",
      summary: null,
    },
    {
      id: 2,
      calorie: 43.8,
      eng_name: "Mozzarella Cheese",
      img: "https://www.subway.co.kr/../images/menu/img_recipe_c03.jpg",
      name: "모차렐라 치즈",
      summary: null,
    },
  ]);
};

export default cheese;
