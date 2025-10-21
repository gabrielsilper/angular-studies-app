export default class Message {
  constructor(private _status: number, private _message: string | null) {}

  public get status(): number {
    return this._status;
  }

  public get message(): string | null {
    return this._message;
  }
}
