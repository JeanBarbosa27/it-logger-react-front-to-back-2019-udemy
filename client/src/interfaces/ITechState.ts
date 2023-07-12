import ITech from "./ITech";

export default interface ITechState {
  error: string | null;
  current: ITech | null;
  techs: Array<ITech> | null;
}
