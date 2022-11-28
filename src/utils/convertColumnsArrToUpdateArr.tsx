import { IColumn } from '../models/IColumn';
import { IColumnsSet } from '../models/IColumnsSet';

export const convertColumnsArrToUpdateArr = (tasks: IColumn[]): IColumnsSet[] => {
  return tasks.map(({ _id, order }) => {
    return { _id, order };
  });
};
