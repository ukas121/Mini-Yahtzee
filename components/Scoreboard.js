import React from 'react';
import { View, Text } from 'react-native';
import style from '../style/style';


const Scoreboard = ({ gameEndStatus, lastScores }) => {
  return (
    <View>
      {gameEndStatus ? (
        <View>
          <Text>Scoreboard</Text>
          {lastScores && lastScores.length > 0 ? (
            lastScores.map((score, index) => (
              <Text key={index}>{score}</Text>
            ))
          ) : (
            <Text>No scores to display</Text>
          )}
        </View>
      ) : null}
    </View>
  );
};

export default Scoreboard;