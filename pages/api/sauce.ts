import type { NextApiRequest, NextApiResponse } from "next";

const sauce = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json([
    {
      calorie: 116,
      eng_name: "Ranch",
      img: "https://www.subway.co.kr/../images/menu/img_recipe_s01.jpg",
      name: "랜치",
      sum: "고소한 마요네즈와 레몬즙의 만남! 고소함이 두배!",
    },
    {
      calorie: 158,
      eng_name: "Mayonnaise",
      img: "https://www.subway.co.kr/../images/menu/img_recipe_s02.jpg",
      name: "마요네즈",
      sum: "말이 필요없는 고소함의 대명사, <br>마요네즈 소스",
    },
    {
      calorie: 40.1,
      eng_name: "Sweet Onion",
      img: "https://www.subway.co.kr/../images/menu/img_recipe_s07.jpg",
      name: "스위트 어니언",
      sum: "써브웨이만의 특제 레시피로 만든 <br>달콤한 양파소스",
    },
    {
      calorie: 38.4,
      eng_name: "Honey Mustard",
      img: "https://www.subway.co.kr/../images/menu/img_recipe_s03.jpg",
      name: "허니 머스타드",
      sum: "겨자씨가 아낌없이 들어간 달콤한 <br>머스타드 소스",
    },
    {
      calorie: 40,
      eng_name: "Sweet Chilli",
      img: "https://www.subway.co.kr/../images/menu/img_recipe_s12.jpg",
      name: "스위트 칠리",
      sum: "매콤한 칠리에 더해진 <br>기분 좋은 달콤함!",
    },
    {
      calorie: 41.8,
      eng_name: "Hot Chilli",
      img: "https://www.subway.co.kr/../images/menu/img_recipe_s18.jpg",
      name: "핫 칠리",
      sum: "진짜 매운맛을 보고 싶다면?<br>써브웨이의 핫 칠리!",
    },
    {
      calorie: 96.5,
      eng_name: "Southwest Chipotle",
      img: "https://www.subway.co.kr/../images/menu/img_recipe_s09.jpg",
      name: "사우스웨스트 치폴레",
      sum: "핫 칠리와 고소한 마요네즈가 만난 이국적인 매콤한 맛",
    },
    {
      calorie: 15.3,
      eng_name: "Yellow Mustard",
      img: "https://www.subway.co.kr/../images/menu/img_recipe_s11.jpg",
      name: "머스타드",
      sum: "오리지날 옐로우 머스타드 소스",
    },
    {
      calorie: 106,
      eng_name: "Horseradish",
      img: "https://www.subway.co.kr/../images/menu/img_recipe_s04.jpg",
      name: "홀스래디쉬",
      sum: "고소한 마요네즈와 고추냉이의 이색적인 만남! 매니아층을 사로잡은 <br>매력No.1 소스",
    },
    {
      calorie: 124,
      eng_name: "Olive Oil",
      img: "https://www.subway.co.kr/../images/menu/img_recipe_s06.jpg",
      name: "올리브 오일",
      sum: "담백하고 깔끔하게 즐기고 싶다면 <br>주저하지 말고 올리브오일",
    },
    {
      calorie: 0.7,
      eng_name: "Red Wine Vinaigrette",
      img: "https://www.subway.co.kr/../images/menu/img_recipe_s05.jpg",
      name: "레드와인식초",
      sum: "레드와인을 발효시켜 풍미가 가득한 식초",
    },
    {
      calorie: 0,
      eng_name: "Salt",
      img: "https://www.subway.co.kr/../images/menu/img_recipe_s13.jpg",
      name: "소금",
      sum: "",
    },
    {
      calorie: 0,
      eng_name: "Black Pepper",
      img: "https://www.subway.co.kr/../images/menu/img_recipe_s14.jpg",
      name: "후추",
      sum: "",
    },
    {
      calorie: 32.8,
      eng_name: "Smoke BBQ",
      img: "https://www.subway.co.kr/../images/menu/img_recipe_s17.jpg",
      name: "스모크 바비큐",
      sum: "스모크 향과 달콤한 바비큐의 완벽한 조화",
    },
    {
      calorie: 49,
      eng_name: "Italian Dressing",
      img: "https://www.subway.co.kr//upload/menu/sauce_italian_dressing.png",
      name: "이탈리안 드레싱",
      sum: "샐러드와 잘 어울리며 입맛을 돋워주는 상큼함",
    },
  ]);
};

export default sauce;
