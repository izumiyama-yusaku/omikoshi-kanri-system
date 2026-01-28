//型ガード用の識別子を定義
export const USER_TYPE = {
    PARENT:'parent',
    CHILD: 'child',
} as const;

//名前を保存する共通のインターフェース
export interface FullName{
    lastName: string,
    firstName: string,
    lastNameKana: string,
    firstNameKana: string,
}

export interface ParentData{
    id: number,
    type: typeof USER_TYPE.PARENT,
    name: FullName,
    email: string,
    phone: string,
}

export interface ChildData{
    id: number;
    type: typeof USER_TYPE.CHILD,
    name: FullName,
    participateDate:string,
    serviceOption:string[]
}

export type sendDateType = ParentData|ChildData;