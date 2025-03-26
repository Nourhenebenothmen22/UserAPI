import SimpleImageSlider from "react-simple-image-slider";
const Slider = ({img}) => {
    console.log("message",img)
    const images = img && Array.isArray(img)? img?.map((i) => {
        return {
            url: "http://localhost:3000/" + i.image
        }
    }):[]
  return (
    <div>
      <SimpleImageSlider
        width={500}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}
export default Slider ;



