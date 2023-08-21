function Step({ image, text }) {
  return (
    <div className="step flex flex-row items-center mt-[8px] md:mt-[15px]">
      <img className="w-[50px] h-[50px]" src={image} alt={text} />
      <span className="ml-[15px] text-md md:text-xs">{text}</span>
    </div>
  );
}

export default Step;
