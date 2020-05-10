import * as bugActions from '../actions/bugActions';
import * as bugStatuses from '../../utils/bugStatuses';

const bugState = {
  bugs: [
    {
      id: 1,
      name: 'Bug 1',
      key: 'BUG-1',
      status: bugStatuses.BUG_STATUS_OPEN,
      description:
        'Bacon ipsum dolor amet chicken tenderloin tail rump picanha corned beef fatback chislic pork. Landjaeger porchetta corned beef ball tip drumstick. Tail turkey pork loin cupim, salami doner t-bone kielbasa shoulder alcatra leberkas ham hamburger andouille beef. Sausage turducken flank cow jerky tri-tip, burgdoggen hamburger. Burgdoggen cow landjaeger, chicken short loin jerky tenderloin. Porchetta ham bacon, shankle shank biltong pork chop.',
      created_on: 'December 17, 2019 03:24:00',
      created_by: {
        username: 'gogu'
      }
    },
    {
      id: 2,
      name: 'Bug 2',
      key: 'BUG-2',
      status: bugStatuses.BUG_STATUS_OPEN,
      description:
        'Meatball ham hock tri-tip, jowl burgdoggen capicola boudin tail frankfurter. Cow kevin venison, rump burgdoggen landjaeger brisket biltong jerky shankle hamburger salami turkey strip steak. Cow tail hamburger strip steak fatback brisket, capicola short loin tongue flank. Meatloaf rump doner shoulder leberkas capicola bacon kevin beef ribs fatback filet mignon porchetta.',
      created_on: 'October 1, 2019 17:01:00',
      created_by: {
        username: 'gogu'
      }
    },
    {
      id: 3,
      name: 'Bug 3',
      key: 'BUG-3',
      status: bugStatuses.BUG_STATUS_OPEN,
      description:
        'Ribeye ham hock pork loin strip steak rump. Brisket buffalo tongue, tri-tip flank beef ribs meatloaf venison short loin hamburger drumstick pastrami spare ribs. Chicken sausage salami frankfurter burgdoggen alcatra filet mignon pork loin venison turducken jerky sirloin short loin pork belly. Cupim pork chop beef, bacon ground round shoulder brisket ball tip tenderloin picanha chuck pork loin. Sirloin chicken t-bone, meatball shank cow burgdoggen pastrami frankfurter jerky meatloaf. Landjaeger salami rump, andouille shank picanha jowl bacon kielbasa burgdoggen.',
      created_on: 'September 14, 2019 12:32:00',
      created_by: {
        username: 'gogu'
      },
    },
    {
      id: 4,
      name: 'Bug 4',
      key: 'BUG-4',
      status: bugStatuses.BUG_STATUS_OPEN,
      description:
        'Flank jerky pancetta tail, chicken beef ribs prosciutto cupim tri-tip salami biltong ground round fatback. Pork chop alcatra andouille, strip steak landjaeger tail frankfurter. Turducken boudin venison, chuck hamburger rump chicken pancetta biltong corned beef strip steak frankfurter jowl chislic jerky. Pastrami chuck ham hock drumstick picanha turkey kielbasa leberkas burgdoggen tail meatball turducken buffalo. Sirloin shoulder landjaeger corned beef bresaola chuck ham kielbasa cupim venison porchetta boudin. Andouille beef ball tip pastrami.',
      created_on: 'November 5, 2019 11:44:00',
      created_by: {
        username: 'gogu'
      }
    },
    {
      id: 5,
      name: 'Bug 5',
      key: 'BUG-5',
      status: bugStatuses.BUG_STATUS_OPEN,
      description:
        null,
      created_on: 'January 17, 2019 9:37:00',
      created_by: {
        username: 'gogu'
      }
    }
  ]
};

const findIndex = (arr, id) => {
  if (!id || !arr || !Array.isArray(arr) || arr.length === 0) {
    return -1;
  }
  let index = -1;
  arr.find((e, i) => {
    index = i;
    return e.id === id;
  });
  return index;
};

const bugAdded = (state, bug) => {
  const cloneState = JSON.parse(JSON.stringify(state));
  cloneState.bugs.push(bug);
  return cloneState;
};

const bugUpdated = (state, bug) => {
  const cloneState = JSON.parse(JSON.stringify(state));
  const index = findIndex(cloneState.bugs, bug.id);
  if (index === -1) {
    return state;
  }
  cloneState.bugs[index] = bug;
  return cloneState;
};

const bugRemoved = (state, id) => {
  const cloneState = JSON.parse(JSON.stringify(state));
  const index = findIndex(cloneState.bugs, id);
  if (index === -1) {
    return state;
  }
  cloneState.bugs.splice(index, 1);
  return cloneState;
};

const bugReducer = (state = bugState, action) => {
  const type = action.type;
  switch (type) {
    case bugActions.BUG_UPDATED:
      return bugUpdated(state, action.payload.bug);
    case bugActions.BUG_ADDED:
      return bugAdded(state, action.payload.bug);
    case bugActions.BUG_DELETED:
      return bugRemoved(state, action.payload.id);
    default:
      return state;
  }
};

export default bugReducer;
