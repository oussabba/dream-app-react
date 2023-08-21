function Button({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-[#80B1B7] rounded-lg w-[150px] h-[35px] mx-auto mt-[30px] text-white text-[11px] font-bold flex items-center justify-center drop-shadow-lg cursor-pointer"
    >
      EXPRIMER MES RÊVES&gt;
    </div>
  );
}

export default Button;
