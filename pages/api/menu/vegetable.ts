import type { NextApiRequest, NextApiResponse } from "next";

interface ResType {
  id: number;
  calorie: number;
  eng_name: string;
  img: string;
  name: string;
}

const vegetable = (req: NextApiRequest, res: NextApiResponse<ResType[]>) => {
  res.status(200).json([
    {
      id: 0,
      calorie: 2.9,
      eng_name: "Lettuse",
      img: "https://www.subway.co.kr/images/menu/img_recipe_v01.jpg",
      name: "양상추",
    },
    {
      id: 1,
      calorie: 7.7,
      eng_name: "Tomatoes",
      img: "https://www.subway.co.kr/images/menu/img_recipe_v02.jpg",
      name: "토마토",
    },
    {
      id: 2,
      calorie: 1.5,
      eng_name: "Cucumbers",
      img: "https://www.subway.co.kr/images/menu/img_recipe_v03.jpg",
      name: "오이",
    },
    {
      id: 3,
      calorie: 1.4,
      eng_name: "Peppers",
      img: "https://www.subway.co.kr/images/menu/img_recipe_v04.jpg",
      name: "피망",
    },
    {
      id: 4,
      calorie: 2.8,
      eng_name: "Red Onions",
      img: "https://www.subway.co.kr/images/menu/img_recipe_v05.jpg",
      name: "양파",
    },
    {
      id: 5,
      calorie: 0.4,
      eng_name: "Pickles",
      img: "https://www.subway.co.kr/images/menu/img_recipe_v06.jpg",
      name: "피클",
    },
    {
      id: 6,
      calorie: 3.9,
      eng_name: "Olives",
      img: "https://www.subway.co.kr/images/menu/img_recipe_v07.jpg",
      name: "올리브",
    },
    {
      id: 7,
      calorie: 0.6,
      eng_name: "Jalapenos",
      img: "https://www.subway.co.kr/images/menu/img_recipe_v08.jpg",
      name: "할라피뇨",
    },
    {
      id: 8,
      calorie: 56.5,
      eng_name: "Avocado",
      img: "https://www.subway.co.kr/images/menu/img_recipe_v09.jpg",
      name: "아보카도",
    },
  ]);
};

export default vegetable;
