import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import ThumbsUp from "../assets/thumbs-up.webp";

interface Props {
  rating: number;
}

const emoji = ({ rating }: Props) => {
  console.log(rating);
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    2: { src: ThumbsUp, alt: "recommended", boxSize: "25px" },
    1: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default emoji;
