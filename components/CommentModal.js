import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../Atom/Atommodal";

const CommentModal = () => {
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <div>
      <p>CommentModal</p>
      {open && <h1>the modal is open</h1>}
    </div>
  );
};

export default CommentModal;
