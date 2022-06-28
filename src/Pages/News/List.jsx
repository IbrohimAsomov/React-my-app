import React from "react";

const List = ({ data }) => {
  const { avatar, first_name, last_name, email } = data;
  return (
    <>
      <div  className=" card w-25 p-3 mx-auto">
        <img src={avatar} alt="" />
        <div className="card-body">
          <h2 className=" h5 card-title">
            {first_name} {last_name}
          </h2>

          <small className="">{email}</small>
        </div>
      </div>
    </>
  );
};

export default List;
