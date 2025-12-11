declare namespace _ {
    declare interface LoDashStatic {
        mul: (array: number[]) => number;
    }
}
// Desta forma, o typescript vai achar que isso existe dentro do lodash, e nao vai acusar erro;

declare namespace NodeJS {
    interface Global {
        MYGLOBAL: string;
    }
}

declare const global: typeof globalThis & {
    MYGLOBAL: string;
};
