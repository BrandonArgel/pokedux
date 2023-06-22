import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { logger } from "@middleware";
import { reducers } from "./reducers";
import thunk from "redux-thunk";

export const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(logger, thunk)));
