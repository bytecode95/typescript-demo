//Genarics

interface IAuthor {
    id: number;
    username: string;
}

interface ICategory{
    id: number;
    title: string;
}



interface IPost {
    id: number;
    titile: string;
    desc: string;
    extra: IAuthor[] | ICategory[]
}
//usergenraics
//here T can be string, number, object , interface T can be whatever your can passs
interface IPostbetter<T> {
    id: number;
    titile: string;
    desc: string;
    extra: T[]
}

const testMe : IPostbetter<String> = {
    id: 1,
    titile: "post titile",
    desc: "post desc",
    extra: ["stra", "str2"]
}

interface IPostEvenBetter<T extends object> {
    id: number;
    titile: string;
    desc: string;
    extra: T[];
}

const betterTest : IPostEvenBetter<IAuthor> = {
    id: 2,
    titile: "post titile1",
    desc: "post desc1",
    extra: [{id:1, username:"author1"}],
}

const betterTest1 : IPostEvenBetter<ICategory> = {
    id: 2,
    titile: "post titile1",
    desc: "post desc1",
    extra: [{id:1, title:"title1"}],
}