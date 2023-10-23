//intersection types
//using union type  variable or function parameter one of many types
//another technique to combining types called intersection

type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}
type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}