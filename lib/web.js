import DashAttach from "./";
import DashAttachPlus from "../plus.js";
import DashAttachExamples from "./examples.js";
import * as apis from "../src/help/apis.js"
import * as data from "../src/help/data.js"
import pkg from "../src/help/lib.js"
import SB3, { Target, Stage, Block } from "../src/help/sb3.js";
import zip from "../src/help/zip.js";

window.DashAttach = DashAttach
window.DashAttachPlus = DashAttachPlus
window.DashAttachExamples = DashAttachExamples
window.DashAttachHelp = {
    apis,
    data,
    pkg,
    sb3: {
        SB3,
        Target,
        Stage,
        Block
    },
    zip
}