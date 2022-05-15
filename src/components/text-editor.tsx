import "./text-editor.css";
import MDEditor from "@uiw/react-md-editor";
import { useEffect, useState, useRef } from "react";
import { Cell } from "../state";
import { useActions } from "../hooks/use-actions";

interface TextEditorProps {
  cell : Cell
}

const TextEditor: React.FC<TextEditorProps> = ({cell}) => {
  const [editing, setEditing] = useState(false);

  const {updateCell} = useActions()

  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (
        ref.current &&
        event.target &&
        ref.current.contains(event.target as Node)
      ) {
        return;
      }

      setEditing(false);
    };

    document.addEventListener("click", listener, { capture: true });

    return () => {
      document.removeEventListener("click", listener, { capture: true });
    };
  }, []);

  if (editing) {
    return (
      <div ref={ref} className="text-editor">
        <MDEditor value={cell.content } onChange={(v) => updateCell(cell.id , v || "")} />
      </div>
    );
  }

  const handleClick = () => {
    setEditing(true);
  };

  return (
    <div onClick={handleClick} className="text-editor card">
      <div className = "card-content">
        <MDEditor.Markdown source={cell.content || 'Click to edit'} />
      </div>
    </div>
  );
};

export default TextEditor;
