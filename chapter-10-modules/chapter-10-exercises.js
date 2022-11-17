/* 10.1 - A Modular Robot
Think about rewriting the chapter 7 project as a modular program.
Q: What modules would you create?
A: I would probably create a module for all of the robots. 
One for the roads and the graph. And one for the village state.

Q: Which module would depend on which other module?
A: The Village and Robots would depend on the roadGraph Module.
The Main application would depend on the village and robots.

Q: What would their interfaces look like?
Q: Which pieces are likely to be availble on NPM?

Q: Would you prefer to use the package or write your own?
A: I would like to write my own so I can more deeply understand the material. However, 
I would most likely use a package because a package is thourougly tested and is 
programmed to take more flexibility into account more than anything I could write myself.
*/

/* 10.2 - Roads Module
Write a CommonJS module based on chapter 7 that contains the array of roads
and exports the graph data structure representing them as roadGraph
It should depend on a module ./graph which exports a function buildGraph
This function expects an array of two element arrays.
*/

/* 10.3 - Circular Dependencies
A circular dependency = module A depends on B and B also depends on A.
Many module systems forbid this because whichever order you choose it 
cannot make sure that each modules dependencies are implemented before it runs.

CommonJS allows a limited form of cyclic dependencies. As long as the modules 
don't replace their default exports object and don't access each other interface 
until after they finish loading cyclic dependencies.

The require function supports this cycle. Can you see how it handles cycles?
What would go wrong when a module in a cycle does replace its default exports object?
*/