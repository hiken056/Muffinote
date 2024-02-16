import { FC } from "react";

interface NoteItemButtonProps {
  title: string;
}

const NoteItemButton: FC<NoteItemButtonProps> = ({title}) => {
  return <button className=" text-white p-2 rounded"> {title} </button>;
};

export default NoteItemButton
