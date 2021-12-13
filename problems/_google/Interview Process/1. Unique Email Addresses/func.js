/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const map = new Map();
  let count = 0;

  for (let i = 0; i < emails.length; i++) {
    let localName = emails[i].split("@")[0];
    const domainName = emails[i].split("@")[1];

    localName = localName.split(".").join("");
    localName = localName.split("+")[0];

    const realName = `${localName}@${domainName}`;

    if (!map.has(realName)) {
      count++;
      map.set(realName);
    }
  }
  return count;
};

module.exports = {
  func: numUniqueEmails,
};
