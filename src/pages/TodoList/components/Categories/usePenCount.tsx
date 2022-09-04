import { ITask } from "../../interface";

interface ReturnType {
  resultPenCount: number;
}

export function usePenCount(
  todoData: ITask[],
  categoriesText: string
): ReturnType {
  // 分類各別筆數
  let taskPenCount = todoData.reduce<Record<string, number>>(
    (accumulator, current) => {
      if (accumulator[current.category]) {
        accumulator[current.category] += 1;
      } else {
        accumulator[current.category] = 1;
      }
      return accumulator;
    },
    {}
  );

  let resultPenCount = 0;
  if (categoriesText === "ALL") {
    resultPenCount = todoData.length;
  } else if (categoriesText === "PENDING") {
    resultPenCount = taskPenCount.PENDING;
  } else {
    resultPenCount = taskPenCount.SOLVED;
  }

  if (resultPenCount === undefined) {
    resultPenCount = 0;
  }

  return {
    resultPenCount,
  };
}
