import type { NextApiRequest, NextApiResponse } from "next";

const bread = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json([
    {
      calorie: 235,
      eng_name: "Honey Oat",
      img: "https://www.subway.co.kr/../images/menu/img_recipe_b01.jpg",
      name: "허니오트",
      summary: "고소한 위트빵에 오트밀 가루를 묻혀 고소함과 식감이 두배로",
    },
    {
      calorie: 210,
      eng_name: "Hearty Italian",
      img: "https://www.subway.co.kr/../images/menu/img_recipe_b02.jpg",
      name: "하티",
      summary:
        "부드러운 화이트빵에 옥수수가루를 묻혀 겉은 바삭하고 고소하며 속은 부드럽게",
    },
    {
      calorie: 192,
      eng_name: "Wheat",
      img: "https://www.subway.co.kr/../images/menu/img_recipe_b03.jpg",
      name: "위트",
      summary: "9가지 곡물로 만들어 건강하고 <br>고소한 맛의 곡물빵",
    },
    {
      calorie: 213,
      eng_name: "Parmesan Oregano",
      img: "https://www.subway.co.kr/../images/menu/img_recipe_b04.jpg",
      name: "파마산 오레가노",
      summary:
        "부드러운 화이트빵에 <br>파마산 오레가노 시즈닝을 묻혀 <br>허브향 가득",
    },
    {
      calorie: 202,
      eng_name: "White",
      img: "https://www.subway.co.kr/../images/menu/img_recipe_b05.jpg",
      name: "화이트",
      summary: "가장 클래식한 빵으로 부드러운 식감이 매력 포인트",
    },
    {
      calorie: 467,
      eng_name: "Flat Bread",
      img: "https://www.subway.co.kr/../images/menu/img_recipe_b06.jpg",
      name: "플랫브레드",
      summary: "이름처럼 납작 모양에 피자도우처럼 쫀득한 맛이 일품",
    },
  ]);
};

export default bread;
