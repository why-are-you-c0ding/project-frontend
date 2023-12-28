import React, { Dispatch, FC, SetStateAction } from "react";
import Post from "@components/Items/Post";

interface Props {
  popup: boolean;
  address: string;
  setZoneCode: Dispatch<SetStateAction<string>>;
  setAddress: Dispatch<SetStateAction<string>>;
  onClickAddrSearch: () => void;
}

const AddressSearchModal: FC<Props> = ({
  popup,
  address,
  setZoneCode,
  setAddress,
  onClickAddrSearch,
}) => {
  return (
    <div>
      {popup && (
        <Post
          address={address}
          setAddress={setAddress}
          setZoneCode={setZoneCode}
          onClickAddrSearch={onClickAddrSearch}
        ></Post>
      )}
    </div>
  );
};

export default AddressSearchModal;
