import { State, StateContext } from "@ngxs/store";
import { Receiver, EmitterAction } from "@ngxs-labs/emitter";
import { produce, Draft } from "immer";
import { Injectable } from "@angular/core";

/**
 * <%= name %> state model
 */
export interface <%= name %>StateModel {
  value: number;
}

/**
 * <%= name %>StateModel State
 */
@State<<%= name %>StateModel>({
  name: "<%= name %>",
  defaults: { value: 0 },
})
@Injectable({
  providedIn: "root",
})
export class <%= name %>State {
  /**
   * Receivers <%= name %> state
   * @param ctx State context provided to the actions in the state.
   * @param action This class is used as a default action when the user doesn't pass any custom action as an argument
   */
  @Receiver({ type: "[<%= name %>] Set New Value" })
  public static setValue(
    ctx: StateContext<<%= name %>StateModel>,
    action: EmitterAction<number>
  ) {
    ctx.setState(
      produce((draft: Draft<<%= name %>StateModel>) => {
        console.log(action.type);
        draft.value = action.payload;
      })
    );
  }
}
