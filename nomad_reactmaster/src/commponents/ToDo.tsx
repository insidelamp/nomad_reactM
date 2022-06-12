import React from "react";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newTodo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newTodo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>
          TO DO
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          DONE
        </button>
      )}
    </li>
  );
}

export default ToDo;

/*
const food = ["피자","탕","치킨","햄버거"]
//undefined

const target = 1;
//undefined

food.slice(1,2)
//['탕']

food.slice(2,4)
//(2) ['치킨', '햄버거']

food.slice(target+1)
//(2) ['치킨', '햄버거']

[...food.slice(0,target),"족발",...food.slice(target+1)]
//(4) ['피자', '족발', '치킨', '햄버거']


slice 에 숫자만넣을시 자동으로 끝까지 반환

위의 배열은 총 0부터 3까지임
food.slice(1) 를 할시에 1번쨰부터 끝까지 전부 반환을함

타입스크립트의 as any 란

타입스크립트에서 체크하짐 말라고 명시하는거임 
*/
