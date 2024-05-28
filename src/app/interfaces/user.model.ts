import { WritableSignal } from "@angular/core";

export interface IUser {
    firstName: WritableSignal<string>;
    lastName: WritableSignal<string>;
    gender: WritableSignal<string>;
    age: WritableSignal<number>
}