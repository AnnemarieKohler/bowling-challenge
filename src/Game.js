function Game() {
  this._frames = []
};

Game.prototype.addFrame = function(newFrame) {
  this._frames.push(newFrame);
}

Game.prototype.getTotalFrames = function() {
  return this._frames;
}
