export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }

    if (this.evacuationWarningMessage === undefined && new.target !== Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    // if (new.target === Building) {
    // throw new TypeError('Cannot construct Building instances directly');
    // }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = value;
  }
}
