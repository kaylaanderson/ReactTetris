import React, { useState} from 'react';
// Styled Components
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';
// Custom Hooks
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useGameStatus } from '../hooks/useGameStatus';
// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

  return (
    <div>
      <StyledTetrisWrapper>
        <StyledTetris>
          <Stage stage={stage} />
          <aside>
            {gameOver} 
            <div>
              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Level" />
            </div>
            <StartButton />
          </aside>
        </StyledTetris>
      </StyledTetrisWrapper>
    </div>
  );
};

export default Tetris;