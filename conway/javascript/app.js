import {askByPrompt}  from "./a007.js";
import { switchCups } from "./a007.js";
import { ask2Confirm, ask3Times, makeObjConfirm } from "./a007.js";
import { redirect2Labenu } from "./a007.js";
/*------------------------------------------------------------*/
askByPrompt('Insira um numero')
ask3Times("tem PET?", "tem cachorro?", "chama Thor?" )
switchCups()
redirect2Labenu()