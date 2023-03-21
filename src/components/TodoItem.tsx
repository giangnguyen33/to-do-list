import styled from "@emotion/styled";
import React from "react";

export const Wrapper = styled.label({
    display: "flex",
    alignItems: "center",
    width: "100%",
    borderRadius: 4,
    marginBottom: 8,
    padding: 16,
    background: "white",
    fontWeight: "400",
    fontSize: 14,
    cursor: "pointer",
  });

const Label = styled.span({
    textDecoration: "none",
    fontSize: 20,
    margin: 0,
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
  });

const Checkbox = styled.input({
    width: 16,
    height: 16,
    marginRight: 12,
  });

  
interface TodoItemProps {
    id: string;
    label:string;
    checked: boolean;
    onChange?: (checked: boolean, id:string)=> void;
}


const TodoItem = ({id, label, checked, onChange}:TodoItemProps)=>{
    return <Wrapper data-testid = {`todo-item-${id}`}>
        <Checkbox type="checkbox" checked={checked} onChange={(e)=>onChange(e.target.checked, id)}></Checkbox>
        <Label >{label}</Label>
    </Wrapper>

}

 export default TodoItem;

