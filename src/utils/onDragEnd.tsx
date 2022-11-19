import { Dispatch } from '@reduxjs/toolkit';
import { DropResult } from 'react-beautiful-dnd';
import { IColumn } from '../models/IColumn';
import { ITask } from '../models/ITask';
import { setColumns, updateTask } from '../slices/boardSlice/boardSlice';
import { swapElements } from './utils';

export const onDragEnd =
  (dispatch: Dispatch, tasks: ITask[], columns: IColumn[]) => (result: DropResult) => {
    if (result.destination) {
      switch (result.type) {
        case 'column':
          dispatch(
            setColumns(swapElements(columns, result.destination.index, result.source.index))
          );
          break;

        case 'task':
          const task = tasks.find((task) => task._id === result.draggableId);
          if (task)
            dispatch(
              updateTask({
                index: tasks.indexOf(task),
                order: result.destination.index,
                columnId: result.destination.droppableId,
              })
            );
          break;
      }
    }
  };
