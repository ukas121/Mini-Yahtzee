import { useState } from 'react';
import { Text, View, TextInput, Pressable, Keyboard } from 'react-native';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Header from './Header';
import Footer from './Footer';
import { 
    NBR_OF_DICES,
    NBR_OF_THROWS,
    MIN_SPOT,
    MAX_SPOT,
    BONUS_POINTS_LIMIT,
    BONUS_POINTS } from '../constants/Game';
import styles from '../style/style';
import Gameboard from './Gameboard';

export default function Home({ navigation }) {

    const [playerName, setPlayerName] = useState("");
    const [hasPlayerName, setHasPlayername] = useState(false);

    const handlePlayerName = (value) => {
        if (value.trim().length > 0) {
            setHasPlayername(true);
            Keyboard.dismiss();
        }
    }

  return (
    <>
        <Header />
        <View>
            <MaterialCommunityIcons
                name="information"
                size={90}
                color="steelblue"
                style={styles.information}
                
                 
            />
            {!hasPlayerName ?
                <>
                    <Text style={styles.gameinfo}>For scoreboard enter your name...</Text>
                    <TextInput
                        onChangeText={setPlayerName}
                        autoFocus={true}
                        style={styles.gameinfo}
                        />
                        <Pressable style={styles.button}
                            onPress={() => handlePlayerName(playerName)}
                            >
                            <Text>OK</Text>
                        </Pressable>
                    </>
                :
                    <>
                        <Text style={styles.gameinfo}>Rules of the game</Text>
                        <Text multiline="true" style={styles.gameinfo}>
                        THE GAME: Upper section of the classic Yahtzee
                        dice game. You have {NBR_OF_DICES} dices and
                        for the every dice you have {NBR_OF_THROWS}
                        throws. After each throw you can keep dices in
                        order to get same dice spot counts as many as
                        possible. In the end of the turn you must select
                        your points from {MIN_SPOT} to {MAX_SPOT}.
                        Game ends when all points have been selected.
                        The order for selecting those is free.
                        </Text>  
                        <Text style={styles.gameinfo}>
                            Good luck, {playerName}</Text> 
                            <Pressable style={styles.button}
                            onPress={() => navigation.navigate(Gameboard)}>   
                            <Text>PLAY</Text>
                            </Pressable> 
                        </>   
                    }     
        </View>
        <Footer />
    </>
  )
}