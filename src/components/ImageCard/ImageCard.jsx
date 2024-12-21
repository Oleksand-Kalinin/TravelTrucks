const ImageCard = ({ img }) => {
  return <>{img && <img src={img.original} alt="photo truck" />}</>;
};

export default ImageCard;
