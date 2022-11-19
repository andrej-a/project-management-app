import { Dispatch } from '@reduxjs/toolkit';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { IColumn } from '../models/IColumn';
import { ITask } from '../models/ITask';
import { setColumns, setTasks } from '../slices/boardSlice/boardSlice';
import { swapElements } from './utils';

export const onDragEnd =
  (
    dispatch: Dispatch,
    tasks: {
      [key: string]: ITask[];
    },
    columns: IColumn[]
  ) =>
  (result: DropResult) => {
    if (result.destination) {
      switch (result.type) {
        case 'column':
          dispatch(
            setColumns(swapElements(columns, result.destination.index, result.source.index))
          );
          break;

        case 'task':
          if (result.source.droppableId === result.destination.droppableId) {
            const columnTasks = [...tasks[result.source.droppableId]];
            dispatch(
              setTasks({
                ...tasks,
                [result.source.droppableId]: swapElements(
                  columnTasks,
                  result.source.index,
                  result.destination.index
                ),
              })
            );
          } else {
            const tasksFromSourceColumn = [...tasks[result.source.droppableId]];
            const tasksFromTargetColumn = [...tasks[result.destination.droppableId]];
            const task = tasksFromSourceColumn[result.source.index];

            tasksFromSourceColumn.splice(result.source.index, 1);
            tasksFromTargetColumn.splice(result.destination.index, 0, task);

            dispatch(
              setTasks({
                ...tasks,
                [result.source.droppableId]: tasksFromSourceColumn,
                [result.destination.droppableId]: tasksFromTargetColumn,
              })
            );
          }
          break;
      }
    }
  };
