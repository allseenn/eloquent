const VillageState = require('./07_00.js').VillageState;

const randomRobot = require('./07_00.js').randomRobot;
const routeRobot = require('./07_00.js').routeRobot;
const goalOrientedRobot = require('./07_00.js').goalOrientedRobot;


//runRobot(VillageState.random(), goalOrientedRobot, []);
// Task 1
function countSteps(state, robot, memory) {
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0) return turn;
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

function compareRobot(robot1, memory1, robot2, memory2){
  let sum1 = 0; 
  let sum2 = 0;
  const tasks = 100;
  for(let i=0; i < tasks; i++){
      const state = VillageState.random();
      sum1 += countSteps(state, robot1, memory1);
      sum2 += countSteps(state, robot2, memory2);
  }
  console.log(`Average moves: robot1 ${sum1/100} robot2 ${sum2/100}`)
}

exports.countSteps = countSteps;
exports.compareRobot = compareRobot;

if (require.main === module) {
    compareRobot(randomRobot, [], routeRobot, [])
    compareRobot(routeRobot, [], goalOrientedRobot, [])
}

