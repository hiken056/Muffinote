import {FC, } from 'react';
import NoteItemButton from './NoteItemButton';

interface NoteItemProps {
    title?: string;
    onEditClick?() : void;
    onDeleteClick?() :void;
}

const NoteItem: FC < NoteItemProps > = ({title, onEditClick, onDeleteClick}) => {
    return  <div className = "b-white shadow-md rounded p-5">
    {/* Note Items */}
    <p className="font-semibold text-gray-700 text-lg mb-4">
      {title}
    </p>
    <div className="space-x-4">
        <NoteItemButton title='View' type='regular' onClick={() => {
            console.log("clicked");
        }}/>
        <NoteItemButton onClick = {onEditClick} title='Edit' type='normal'/>
        <NoteItemButton onClick = {onDeleteClick} title='Delete' type='danger'/>
    </div>
  </div>
}

export default NoteItem