import { FC } from "react";

interface NoteItemButtonProps {
  title: string;
  type?: "danger" | "normal" | "regular";
  onClick? () : void 
}

const NoteItemButton: FC<NoteItemButtonProps> = ({ title, type, onClick }) => {
  let color = "";
  switch (type) {
    case "danger":
      color = "bg-red-500";
      break;
    case "normal":
      color = "bg-gray-500";
      break;
    case "regular":
      color = "bg-blue-500";
      break;
  }
  return (
    <button  onClick = {onClick} className={color + " text-white p-2 rounded"}> {title} </button>
  );
};

export default NoteItemButton;
