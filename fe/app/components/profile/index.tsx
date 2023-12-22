import React from "react";
import {
  faCheck,
  faTasks,
  faTrash,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Profile = ({ userData }: any) => {
  const stats = [
    { icon: faTasks, count: 1 },
    { icon: faCheck, count: 2 },
    { icon: faTrashAlt, count: 2 },
  ];

  console.log("userData", userData);

  return (
    <div className="flex flex-col gap-1 absolute top-4 right-4 text-black w-60  bg-[#7FB3D5] p-2 rounded-md border-[#A9A9A9] border-2">
      <span className="text-2xl text-ellipsis w-[90%]">
        {userData.userName}
      </span>
      <div className="flex gap-3">
        {stats.map((stat) => (
          <div className=" flex gap-2">
            <button>
              <FontAwesomeIcon icon={stat.icon} style={{ color: "#2F4F4F" }} />
            </button>
            <span className="text-[#2F4F4F]">{stat.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
