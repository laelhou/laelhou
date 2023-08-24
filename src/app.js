// import { setTrace, tpTracePv } from './utils/trace';
// import { setNavigateTo } from './utils/navigateTo'
// import './app.less'
// import { setCookie } from './utils/utils';

// setCookie('session_key',"",-1)
// setTrace();
// setNavigateTo();
export async function onRouteChange({ location, routes, action }) {

  if (!action) {
    return;
  }
  // tpTracePv(location);
}

