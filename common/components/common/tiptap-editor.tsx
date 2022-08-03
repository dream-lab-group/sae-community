import { ButtonBase, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { EditorContent, JSONContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { FormikValues } from 'formik';
import {
  BsArrowLeft,
  BsArrowReturnLeft,
  BsArrowRight,
  BsBlockquoteLeft,
  BsCodeSquare,
  BsFillCircleFill,
  BsType,
  BsTypeBold,
  BsTypeH1,
  BsTypeH2,
  BsTypeH3,
  BsTypeItalic,
} from 'react-icons/bs';

const MenuBar = ({ editor }: { editor: any }) => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));

  if (!editor) {
    return null;
  }

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        paddingX: '20px',
        paddingTop: '10px',
      }}
    >
      <ButtonBase
        sx={{ width: '30px', height: '30px' }}
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active tiptap-active' : ''}
      >
        <BsTypeBold size={20} />
      </ButtonBase>
      <ButtonBase
        sx={{ width: '30px', height: '30px' }}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={
          editor.isActive('italic') ? 'is-is-active tiptap-active' : ''
        }
      >
        <BsTypeItalic size={20} />
      </ButtonBase>
      <ButtonBase
        sx={{ width: '30px', height: '30px' }}
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={
          editor.isActive('paragraph') ? 'is-active tiptap-active' : ''
        }
      >
        <BsType size={20} />
      </ButtonBase>
      <ButtonBase
        sx={{ width: '30px', height: '30px' }}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={
          editor.isActive('heading', { level: 1 })
            ? 'is-active tiptap-active'
            : ''
        }
      >
        <BsTypeH1 size={20} />
      </ButtonBase>
      <ButtonBase
        sx={{ width: '30px', height: '30px' }}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={
          editor.isActive('heading', { level: 2 })
            ? 'is-active tiptap-active'
            : ''
        }
      >
        <BsTypeH2 size={20} />
      </ButtonBase>
      <ButtonBase
        sx={{ width: '30px', height: '30px' }}
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={
          editor.isActive('heading', { level: 3 })
            ? 'is-active tiptap-active'
            : ''
        }
      >
        <BsTypeH3 size={20} />
      </ButtonBase>
      <ButtonBase
        sx={{ width: '30px', height: '30px' }}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={
          editor.isActive('bulletList') ? 'is-active tiptap-active' : ''
        }
      >
        <BsFillCircleFill size={10} />
      </ButtonBase>
      <ButtonBase
        sx={{ width: '30px', height: '30px' }}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={
          editor.isActive('codeBlock') ? 'is-active tiptap-active' : ''
        }
      >
        <BsCodeSquare size={20} />
      </ButtonBase>
      <ButtonBase
        sx={{ width: '30px', height: '30px' }}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={
          editor.isActive('blockquote') ? 'is-active tiptap-active' : ''
        }
      >
        <BsBlockquoteLeft size={20} />
      </ButtonBase>
      {smBreakpointDown ? (
        <Box sx={{ height: '100%', width: '100%', display: 'flex' }}>
          <ButtonBase
            sx={{ width: '90px', height: '30px' }}
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
          >
            Horizontal rule
          </ButtonBase>
          <ButtonBase
            sx={{ width: '30px', height: '30px' }}
            onClick={() => editor.chain().focus().setHardBreak().run()}
          >
            <BsArrowReturnLeft size={20} />
          </ButtonBase>
          <ButtonBase
            sx={{ width: '30px', height: '30px' }}
            onClick={() => editor.chain().focus().undo().run()}
          >
            <BsArrowLeft size={20} />
          </ButtonBase>
          <ButtonBase
            sx={{ width: '30px', height: '30px' }}
            onClick={() => editor.chain().focus().redo().run()}
          >
            <BsArrowRight size={20} />
          </ButtonBase>
        </Box>
      ) : (
        <>
          <ButtonBase
            sx={{ width: '90px', height: '30px' }}
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
          >
            Horizontal rule
          </ButtonBase>
          <ButtonBase
            sx={{ width: '30px', height: '30px' }}
            onClick={() => editor.chain().focus().setHardBreak().run()}
          >
            <BsArrowReturnLeft size={20} />
          </ButtonBase>
          <ButtonBase
            sx={{ width: '30px', height: '30px' }}
            onClick={() => editor.chain().focus().undo().run()}
          >
            <BsArrowLeft size={20} />
          </ButtonBase>
          <ButtonBase
            sx={{ width: '30px', height: '30px' }}
            onClick={() => editor.chain().focus().redo().run()}
          >
            <BsArrowRight size={20} />
          </ButtonBase>
        </>
      )}
      <Box
        sx={{
          background: '#e0e0e0',
          height: '1px',
          width: '100%',
          marginY: '10px',
        }}
      />
    </Box>
  );
};

const TipTapEditor = ({
  content,
  edit,
  formik,
}: {
  content?: string;
  edit: boolean;
  formik: any;
}) => {
  const editor = useEditor({
    extensions: [StarterKit],
    autofocus: true,
    content: `${content ? content : ''}`,
    onUpdate: ({ editor }) => {
      const json = editor.getHTML();
      formik('description', json);
    },
  });

  return (
    <Box
      sx={{
        width: '100%',
        height: '250px',
        border: '1px solid #bdbdbd',
        borderRadius: '10px',
        marginY: '20px',
      }}
    >
      {edit ? <MenuBar editor={editor} /> : <></>}
      <Box className="tiptap-edit">
        {/* @ts-expect-error: todo */}
        <EditorContent editor={editor} />
      </Box>
    </Box>
  );
};

export default TipTapEditor;
