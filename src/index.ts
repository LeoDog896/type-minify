import { Project } from "ts-morph";

const project = new Project();

project.createSourceFile("index.ts", "type X<N extends number> = [  N,    N]")

// we want to format the file, then get the new output
project.getSourceFileOrThrow("index.ts").formatText()

const output = project.getSourceFileOrThrow("index.ts").getText()
console.log(output)