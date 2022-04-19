export class ChocoEnum {
  static white = new ChocoEnum("white", "#ffe6a7");
  static goldenWhite = new ChocoEnum("golden-white", "#bb9457");
  static black = new ChocoEnum("black", "#8b5d33");
  static goldenBlack = new ChocoEnum("golden-black", "#b88b4a");

  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
}
