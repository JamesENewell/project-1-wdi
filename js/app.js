$(()=>{

  const loss = new Audio('./sounds/Depth Charge-SoundBible.mp3');
  const winning = new Audio('./sounds/Kids Cheering-SoundBible.mp3');
  let mines = 0;
  let win;
  let gameOver;
  let totalMines;



  const $board = $('#board');
  const $result = $('#result');


  // const $mine = $('mine');
  // create levels function to change amount of ROWS + COLUMNS in game
  const rows = 10;
  const cols = 10;

  //creates the board by creating a row for the value of row; then creating columns inside them for the value of cols
  function drawBoard(rows, cols) {
    $board.empty();
    for (let i = 0; i < rows; i ++) {
      const $row = $('<div>').addClass('row');
      for (let j = 0; j < cols; j ++) {
        const $col = $('<div>')
          .addClass('col hidden')
          .attr('data-row', i)
          .attr('data-col', j);
        // Change decimal to increase difficulty in game
        if (Math.random() < 0.15) {
          $col.addClass('mine');
          mines ++;
          totalMines = mines;
          console.log(mines, totalMines);
        }
        $row.append($col);
      }
      $board.append($row);
    }
    $board.show();
  }


  function restart() {
    $result.empty();
    drawBoard(rows, cols);
    mines = 0;

  }

  function gameCondition(gameOver) {
    console.log('running');
    let icon = null;
    if (gameOver === 'win'){
      console.log('win condition');
      $result.text('Congratulations You Won!');
      winning.play();
    } else if (gameOver === 'lose') {
      icon = 'fa fa-bomb';
      $result.text('Better Luck Next Time, You Lost!');
      loss.play();
      $board.delay(2500).fadeOut(2500);
    }
    $('.col.mine').append(
      $('<i>').addClass(icon)
    );
    $('.col:not(.mine)')
      .html(function() {
        const $cell = $(this);
        const count = getMineCount(
          $cell.data('row'),
          $cell.data('col'),
        );
        return count === 0 ? '' : count;
      });
    $('.col.hidden').removeClass('hidden');
    setTimeout(function() {
      restart();
    }, 5000);
  }


  // Check nearest 8 cells to firstI firstJ
  function reveal(firstI, firstJ) {
    const seen = {};

    function checker(i, j) {
      if (i >= rows || j >= cols || i < 0 || j < 0) return;
      const key = `${i} ${j}`;
      if (seen[key]) return;
      const $cell = $(`.col.hidden[data-row=${i}][data-col=${j}]`);
      const mineCount = getMineCount(i,j);
      if (
        !$cell.hasClass('hidden') || $cell.hasClass('mine')){
        return;
      }
      $cell.removeClass('hidden');

      if (mineCount) {
        $cell.text(mineCount);
        return;
      }
      // [-1,-1][0,-1][1,-1]
      // [-1,0][i,j][1,0]
      // [-1,1][0,1][1,1]

      for (let di = -1; di <= 1; di ++) {
        for (let dj = -1; dj <= 1; dj ++) {
          checker(i + di, j + dj);
        }
      }
    }

    checker(firstI, firstJ);

  }

  // Check the 8 cells around i and j for mines
  function getMineCount(i,j) {
    let count = 0;
    for (let di = -1; di <= 1; di ++) {
      for (let dj = -1; dj <= 1; dj ++) {
        const ei = i + di;
        const ej = j + dj;
        if (ei >= rows || ej >= cols || ei < 0 || ej < 0)
          continue;
        const $cell = $(`.col.hidden[data-row=${ei}][data-col=${ej}]`);
        if($cell.hasClass('mine')) count++;
      }
    }
    return count;


  }

  // $board.on('click', function() {
  //   let clickCount = 0;
  //   clickCount++;
  //
  //
  //   console.log(clickCount);
  // });

  $board.on('click', '.col.hidden', function() {
    const $cell = $(this);
    const row = $cell.data('row');
    const col = $cell.data('col');
    let remainingMines = $('.hidden').length;


    if ($cell.hasClass('mine')) {
      gameCondition('lose');
    } else if ((remainingMines --) === totalMines){
      gameCondition('win');
    } else {
      reveal(row, col);
      console.log(remainingMines, totalMines);

    }
  });


  $board.on('contextmenu', function(e) {
    e.preventDefault();
    // console.log(e.target);
    const icon = 'fa fa-flag';
    $(e.target).append($('<i>').addClass(icon)).addClass('flag');

  }
  );


  restart();

});
