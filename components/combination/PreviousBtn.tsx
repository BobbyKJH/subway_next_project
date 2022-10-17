// React
import { useRouter } from "next/router";
import React from "react";
// Style
import { PreviousButton } from "../../styles/components/combination/PreviouseBtn.styled";
// Image
import { IoIosArrowBack } from "react-icons/io";

const PreviousBtn = ({ link }: { link: string }) => {
  const router = useRouter();

  const previous = (e: React.MouseEvent<HTMLButtonElement>) => {
    router.push(`/combination/${link}`);
  };

  return (
    <PreviousButton onClick={previous}>
      <IoIosArrowBack />
    </PreviousButton>
  );
};

export default PreviousBtn;
