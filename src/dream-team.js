const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let peopleString = [];
  let teamName = '';
  if (members == null) {
    return false;
  }
  for (i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      peopleString.push(members[i].replace(/\s/g, '').toUpperCase());
    }
  }

  peopleString.sort();
  for (i = 0; i < peopleString.length; i++) {
    teamName += peopleString[i][0];
  }
  return teamName;
}

module.exports = {
  createDreamTeam,
};
