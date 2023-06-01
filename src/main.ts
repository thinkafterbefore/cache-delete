import * as core from "@actions/core";

async function run(): Promise<void> {
  try {
    const cacheKey: string = core.getInput("CACHE_KEY");
    core.debug(`Will delete ${cacheKey} from the BuildJet Cache`); // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true
    core.info(`Will delete ${cacheKey} from the BuildJet Cache`); // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true
    // core.debug(new Date().toTimeString());
    // await wait(parseInt(ms, 10));
    // core.debug(new Date().toTimeString());
    //
    // core.setOutput("time", new Date().toTimeString());
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();
