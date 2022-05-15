import { Fragment } from "react";
import { useTypedSelector } from "../hooks/use-typed-selector";
import { Cell } from "../state";
import AddCell from "./add-cell";
import CellListItems from "./cell-list-items";

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) =>
    order.map((id: string | number) => data[id])
  );

  const renderedList = cells.map((cell: Cell) => (
    <Fragment key={cell.id}>
      <CellListItems cell={cell} />
      <AddCell previousCellId={cell.id} />
    </Fragment>
  ));

  return (
    <div>
      <AddCell forceVisible = {cells.length === 0} previousCellId={null} />
      {renderedList}
    </div>
  );
};

export default CellList;
