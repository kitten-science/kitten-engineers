import { BuildHut } from "./examples/build-hut-operator.js";
import type { Operator } from "./GraphSolver.js";

export class RootSolver {
  solve(): Operator {
    return new BuildHut();
  }
}
