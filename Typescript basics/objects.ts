type user = {
    name: string;
    age: number;
    isMarried: boolean;
    hobbies: string[];
    gender?: string; //optional
};

const user: user = {
    name: "John",
    age: 28,
    isMarried: false,
    hobbies: ["footbal"]
};

const users : user[] = [user];

