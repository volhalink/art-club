import { Step } from "./path-context";

export default [
    {
        id: 0,
        name: "Start here",
        description: "Some text",
        isInProgress: false,
        type: "start",
    },
    {
        id: 1,
        name: "Read first",
        description: "Some long text",
        isInProgress: false,
        type: "read",
    },
    {
        id: 2,
        name: "Nex do exercises",
        description: "Some text",
        isInProgress: false,
        type: "practice",
    }
] as Step[];