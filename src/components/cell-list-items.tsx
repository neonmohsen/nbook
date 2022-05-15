import { Cell } from "../state";
import ActionBar from "./action-bar";
import CodeCell from "./code-cell";
import TextEditor from "./text-editor";
import "./cell-list-items.css";

interface CellListItemsProps {
  cell: Cell;
}

const CellListItems: React.FC<CellListItemsProps> = ({ cell }) => {
  let child: JSX.Element;

  if (cell?.type === "code") {
    child = (
      <>
        <div className="action-bar-wrapper">
          <ActionBar id={cell.id} />
        </div>
        <CodeCell cell={cell} />
      </>
    );
  } else {
    child = (
      <>
        <TextEditor cell={cell} />
        <ActionBar id={cell.id} />
      </>
    );
  }

  return <div className="cell-list-item">{child}</div>;
};

export default CellListItems;
