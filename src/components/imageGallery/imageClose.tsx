import closeIcon from "../../assets/icons/close.svg";

const ImageClose = ({ handleOnClose }: { handleOnClose: any }) => {
  return (
    <div className="image-close">
      <a onClick={handleOnClose} style={{cursor: "pointer"}}>
        <img src={closeIcon}/>
      </a>
    </div>
  );
};

export default ImageClose;
