import React from "react";

const SendDataModal = () => {
  return (
    <div className="w-full h-full backdrop-blur-md flex justify-center items-center fixed top-0 left-0 z-50">
      <div className="w-2/4 h-2/4 bg-slate-100 border-solid border-slate-700 border-2   rounded-lg flex justify-center items-center animate-scale-up-center">
        <p className="text-slate-900 text-xl ">送信が完了しました</p>
      </div>
    </div>
  );
};

export default SendDataModal;
