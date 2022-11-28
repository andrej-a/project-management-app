import { Dispatch } from '@reduxjs/toolkit';
import { DropResult } from 'react-beautiful-dnd';
import { IColumn } from '../models/IColumn';
import { ITask } from '../models/ITask';
import { fetchColumnsSet } from '../slices/columnSlice/actions';
import { setColumns } from '../slices/columnSlice/columnSlice';
import { fetchTasksSet } from '../slices/taskSlice/actions';
import { setTasks } from '../slices/taskSlice/taskSlice';
import { AppDispatch } from '../store/store';
import { convertColumnsArrToUpdateArr } from './convertColumnsArrToUpdateArr';
import { convertTasksArrToUpdateArr } from './convertTasksArrToUpdateArr';

import { reorderElements, swapElements } from './utils';

export const onDragEnd =
  (dispatch: AppDispatch, tasks: ITask[], columns: IColumn[]) => (result: DropResult) => {
    const { source, destination, type } = result;
    if (
      destination &&
      !(destination.droppableId === source.droppableId && destination.index === source.index)
    ) {
      switch (type) {
        case 'column':
          const newColumns = swapElements(columns, destination.index, source.index);
          dispatch(fetchColumnsSet(convertColumnsArrToUpdateArr(newColumns)));
          dispatch(setColumns(newColumns));
          break;

        case 'task':
          if (destination.droppableId === source.droppableId) {
            const columnId = destination.droppableId;
            const column = [...tasks.filter((task) => task.columnId === columnId)];
            const restColumns = [...tasks.filter((task) => task.columnId !== columnId)];
            dispatch(
              fetchTasksSet(
                convertTasksArrToUpdateArr([
                  ...restColumns,
                  ...(swapElements(column, destination.index, source.index) as ITask[]),
                ])
              )
            );
            dispatch(
              setTasks([...restColumns, ...swapElements(column, destination.index, source.index)])
            );
          } else {
            const newColumnId = destination.droppableId;
            const oldColumnId = source.droppableId;
            const newColumn = [...tasks.filter((task) => task.columnId === newColumnId)];
            const oldColumn = [...tasks.filter((task) => task.columnId === oldColumnId)];
            const restColumns = [
              ...tasks.filter(
                (task) => task.columnId !== newColumnId && task.columnId !== oldColumnId
              ),
            ];
            const [removed] = oldColumn.splice(source.index, 1);
            newColumn.splice(destination.index, 0, { ...removed, columnId: newColumnId });
            reorderElements(newColumn);
            reorderElements(oldColumn);
            dispatch(
              fetchTasksSet(
                convertTasksArrToUpdateArr([...restColumns, ...newColumn, ...oldColumn])
              )
            );
            return dispatch(setTasks([...restColumns, ...newColumn, ...oldColumn]));
          }
      }
      return;
    } else return;
  };
