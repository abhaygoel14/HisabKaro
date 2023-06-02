import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";

export default function ConfirmDelete(props) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const HandleDelete = async () => {
    setIsLoading(true);
    const listData=JSON.parse(localStorage.getItem("userExpense"))
    const filterdata=listData.filter((ele)=>ele._id!==props.deleteId)
    localStorage.setItem("userExpense",JSON.stringify(filterdata))
    setTimeout(()=>{
      setIsLoading(false);
      props.closeModalConfirm();
      window.location.reload();
    },1000)
  };

  
  return (
    <div className="font-lexand">
      <div>
        <div>
          <h1 className="text-rp-yellow font-bold text-xl w-fit ml-10">
            Are you sure ?
          </h1>
        </div>
        <div className="mt-4 w-fit ml-auto text-jp-black flex">
          {isLoading ? (
            <ReactLoading
              type="bubbles"
              color="#F5A302"
              height={50}
              width={50}
            />
          ) : (
            <button
              onClick={HandleDelete}
              className="py-2 px-4 rounded-md hover:scale-110 duration-150 ease-out font-bold font-lexend bg-rp-yellow mr-4"
            >
              Delete
            </button>
          )}

          <button
            onClick={props.closeModalConfirm}
            className="py-2 px-4 rounded-md hover:scale-110 duration-150 ease-out font-bold font-lexand bg-rp-yellow"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
