import { TreeView, TreeItem } from "@material-ui/lab";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Field, ErrorMessage } from "formik";

import "./Categories.scss";

interface ICategories {
  name: string;
  id?: number;
  children?: readonly ICategories[];
}

const CATEGORIES: ICategories[] = [
  {
    name: "Жанры",
    children: [
      { name: "Детектив", id: 1 },
      { name: "Детские книги", id: 2 },
      { name: "История", id: 3 },
      { name: "Мемуары", id: 4 },
      { name: "Приключения", id: 5 },
      { name: "Психология", id: 6 },
      { name: "Фантастика", id: 7 },
      { name: "Эзотерика", id: 8 },
    ],
  },
  {
    name: "Область наук",
    children: [{ name: "1" }, { name: "2" }, { name: "3" }],
  },
  {
    name: "Состояние",
    children: [
      { name: "Новое", id: 9 },
      { name: "Хорошее", id: 10 },
      { name: "Плохое", id: 11 },
    ],
  },
  {
    name: "Обложка",
    children: [
      { name: "Мягкая", id: 12 },
      { name: "Твердая", id: 13 },
    ],
  },
  {
    name: "Лауреат",
    children: [{ name: "10" }, { name: "11" }, { name: "12" }],
  },
  {
    name: "Экранизация",
    children: [{ name: "13" }, { name: "14" }, { name: "15" }],
  },
  {
    name: "Язык издания",
    children: [{ name: "16" }, { name: "17" }, { name: "18" }],
  },
];

interface IProps {
  type: string;
}

const Categories: React.FC<IProps> = ({ type }) => {
  const renderTree = (nodes: ICategories) => (
    <TreeItem
      sx={{
        "& .MuiTreeItem-content": {
          padding: "6px",
        },
        "& .MuiCheckbox-root": {
          padding: "0 6px 0 0",
        },
      }}
      key={nodes.name}
      nodeId={nodes.name}
      label={
        !nodes.children ? (
          <FormControlLabel
            key={nodes.name}
            label={nodes.name}
            control={
              <Field
                as={Checkbox}
                type="checkbox"
                name={type}
                value={nodes.id?.toString() || nodes.name}
              />
            }
          />
        ) : (
          nodes.name
        )
      }
    >
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
    <>
      <TreeView
        sx={{
          height: "inherit",
          overflowX: "hidden",
          overflowY: "auto",
        }}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {CATEGORIES.map((item) => renderTree(item))}
      </TreeView>

      <ErrorMessage component="div" className="error" name={type} />
    </>
  );
};

export default Categories;
