describe('Game', function() {
  var game;
  var frame;

  beforeEach(function(){
    game = new Game;
    frame = 'new frame';
  });
  
  it('adds frames to a game', function() {
    game.addFrame(frame)
    expect(game.getTotalFrames()).toContain(frame);
  });
});
