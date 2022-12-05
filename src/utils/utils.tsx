import { IColumn } from '../models/IColumn';
import { ITask } from '../models/ITask';

export function swapElements(list: (ITask | IColumn)[], startIndex: number, endIndex: number) {
  const result = [...list];
  const [removed] = result.splice(endIndex, 1);
  result.splice(startIndex, 0, removed);
  reorderElements(result);
  return result;
}
export function reorderElements(list: (ITask | IColumn)[]) {
  for (let i = 0; i < list.length; i++) {
    const editEl = { ...list[i] };
    editEl.order = i;
    list[i] = editEl;
  }
  return list;
}
export function getPriority(priority: string): string {
  switch (priority) {
    case 'высокий':
      return 'high';
    case 'средний':
      return 'medium';
    case 'низкий':
      return 'low';

    default:
      return priority;
  }
}
