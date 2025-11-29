import { NoteForm } from '../components/NoteForm';
import type { NewNoteProps } from '../types';
// Create new note page
export const NewNote = ({
  onSubmit,
  onAddTag,
  availableTags,
}: NewNoteProps) => {
  return (
    <>
      <h1 className="mb-4">Create Note</h1>
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
};
