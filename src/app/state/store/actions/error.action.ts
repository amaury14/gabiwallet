import { Action } from '@ngrx/store';

export const ERROR_HANDLER_ACTION = '[Root][Root_Error_Handler_Action]';
export const GENERIC_ERROR = '[Root][Root_Generic_Error]';

export class ErrorHandlerAction implements Action {
  readonly type = ERROR_HANDLER_ACTION;
  constructor(
    public payload: {
      message: string;
      status?: number;
    }
  ) {}
}

export class GenericError implements Action {
  readonly type = GENERIC_ERROR;
  constructor(public payload: any) {}
}

export type RootAction = ErrorHandlerAction | GenericError;
