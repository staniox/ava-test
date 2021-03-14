export interface ITopBar {
    onclickMenu: () => void
}

export interface ISidebarItem{
    id:number,
    title:string,
    content?:string
    onClick?:(e:any)=>void
}

export interface ISidebarItemsArray{
    items:ISidebarItem[],
    onClick?:(e:any) => void
    show?:boolean
}


