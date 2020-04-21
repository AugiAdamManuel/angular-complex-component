import { State, StateContext } from "@ngxs/store";
import { Receiver, EmitterAction } from "@ngxs-labs/emitter";
import { produce, Draft } from "immer";
import { Injectable } from "@angular/core";

/**
 * Home state model
 */
export interface HomeStateModel {
  value: number;
}

/**
 * HomeStateModel State
 */
@State<HomeStateModel>({
  name: "Home",
  defaults: { value: 0 },
})
@Injectable({
  providedIn: "root",
})
export class HomeState {
  /**
   * Receivers Home state
   * @param ctx State context provided to the actions in the state.
   * @param action This class is used as a default action when the user doesn't pass any custom action as an argument
   */
  @Receiver({ type: "[Home] Set New Value" })
  public static setValue(
    ctx: StateContext<HomeStateModel>,
    action: EmitterAction<number>
  ) {
    ctx.setState(
      produce((draft: Draft<HomeStateModel>) => {
        console.log(action.type);
        draft.value = action.payload;
      })
    );
  }
}
