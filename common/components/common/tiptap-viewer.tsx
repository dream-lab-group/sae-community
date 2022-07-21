import { Box } from '@mui/material';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const TipTapViewer = ({ content }: { content: string }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
  });

  return (
    <Box sx={{ width: '100%', lineHeight: 1.5 }}>
      {/* @ts-expect-error: todo */}
      <EditorContent editor={editor} />
    </Box>
  );
};

export default TipTapViewer;
