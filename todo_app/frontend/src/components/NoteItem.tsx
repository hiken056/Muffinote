import { FC } from "react";
import NoteItemButton from "./NoteItemButton";

interface NoteItemProps {
  title?: string;
  description?: string;
  onEditClick?(): void;
  onDeleteClick?(): void;
  onViewClick?(): void;
}

const NoteItem: FC<NoteItemProps> = ({
  title,
  description,
  onEditClick,
  onDeleteClick,
  onViewClick,
}) => {
  return (
    <div className="b-white shadow-md rounded p-5">
      {/* Note Items */}
      <p className="font-semibold text-gray-700 text-lg mb-4">{title}</p>
      {description ? <p className="ml-2 mb-3 py-3 text-lg">{description}</p> : null}
      <div className="space-x-4">
        <NoteItemButton
          title={description ? "Hide" : "View"}
          type="regular"
          onClick = {onViewClick}
        />
        <NoteItemButton onClick={onEditClick} title="Edit" type="normal" />
        <NoteItemButton onClick={onDeleteClick} title="Delete" type="danger" />
      </div>
    </div>
  );
};

export default NoteItem;
