export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Such an object already exists in the team');
    }

    return this.members.add(character);
  }

  addAll(...character) {
    character.forEach((item) => this.members.add(item));
  }

  toArray() {
    return Array.from(this.members);
  }
}
