import React from "react";

import {
  Container,
  ImageIndexes,
  ImageIndex,
  CarImageWrapper,
  CarImage,
} from "./styles";

interface Props {
  imagesUrls: string[];
}

const ImageSlider = ({ imagesUrls }: Props) => {
  return (
    <Container>
      <ImageIndexes>
        <ImageIndex active={true} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </ImageIndexes>

      <CarImageWrapper>
        <CarImage resizeMode="contain" source={{ uri: imagesUrls[0] }} />
      </CarImageWrapper>
    </Container>
  );
};

export default ImageSlider;
