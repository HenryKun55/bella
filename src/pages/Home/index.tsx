import moment from 'moment';
import LottieView from 'lottie-react-native';
import React, { useEffect, useState } from 'react';
import {
  Button,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  StatusBar,
} from 'react-native';

import { getItem, setItem } from '../../storage';
import { BellaAnimation } from '../../assets/animations';

const height = (percentage = 0.6) => {
  return Dimensions.get('window').height * percentage;
};

export default function App() {
  const [cache, setCache] = useState('false');
  const birthdayDay = new Date(2021, 8, 28, 0, 0, 0);

  async function handleMensage() {
    if (moment().isSameOrAfter(birthdayDay)) {
      setItem('@cache', 'true');
      setCache('true');
      ToastAndroid.show('Feliz Aniversário! 🎉🚀', 1000);
    } else {
      setItem('@cache', 'false');
      setCache('false');
      ToastAndroid.show(
        `Calma, ainda não chegou o dia. Hoje ainda é ${moment().format(
          'DD/MM/YYYY HH:mm',
        )}`,
        1000,
      );
    }
  }

  useEffect(() => {
    (async () => {
      const _cache = await getItem('@cache');
      setCache(_cache || 'false');
    })();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#bb8787" />
      <View style={styles.containerAnimation}>
        <LottieView
          style={styles.animation}
          source={BellaAnimation}
          autoPlay
          loop
        />
        <Text style={styles.title}>Querida Bella</Text>
      </View>
      <ScrollView style={styles.scroll}>
        {cache === 'true' ? (
          <>
            <Text style={styles.text}>
              Eu sei que praticamente passei um ano sem te dar pelo menos um oi,
              e na verdade é que é difícil demais pra mim voltar a fazer muita
              coisa, inclusive me socializar como eu fazia no meu dia a dia
              normal. A ansiedade tem me deixado quase sem levantar, mas não
              quero me lamentar, só não queria que ficasse isso no ar, e não, eu
              nunca esqueci de tu e nunca vou esquecer! Obrigado por seu
              basicamente a única pessoa que veio me ver nesses tempos de
              pandemia, e não é porque outros não puderam vir, mas eu realmente
              só me senti a vontade contigo! Vou tentar não ser extenso pra não
              te cansar, mas que esse dia seja todinho teu, cada segundo que tu
              respirar e sorrir hoje é mais que especial! Primeiramente, Feliz
              Aniversário coisa linda! Tu não sabe como fico feliz de saber que
              tu completa mais um ano de vida, e que tu faz parte de mim, mesmo
              com tudo isso que acontece atualmente. Ah sim, eu to tentando te
              parabenizar de um jeito diferente kkkkk. Não tinha pensado em nada
              tão legal, mas espero que receba esse presente com muito carinho
              que tenho por ti. Poderia te contar milhares de coisas que
              aconteceram comigo, ou sei lá, fazer um novo app com várias coisas
              do que eu vinha fazendo, maaaas, como eu falei antes, o dia é teu,
              e esse gesto é pra você. Obrigado por nunca desistir dos teus
              sonhos, e ser uma das pessoas de mente mais surreal que eu já
              conheci em toda minha vida. Tu tem um lugar mais do que especial
              dentro de mim, não esquece disso. Amo você, amo teu jeito, amo tua
              simplicidade e amo tua vida. Me desculpa mais uma vez por não ter
              sido sincero logo antes, ou qualquer outra coisa que poderia me
              justificar, e também desculpa por chegar assim do nada. Eu vou
              tentar me organizar, e mesmo que eu falhe, tentar me reerguer, e
              falo tudo isso com teu presente que foi entregue pessoalmente
              quando tu veio aqui, ele fica num cantinho aqui do lado, e meu
              irmão as vezes pergunta:"Onde foi que tua amiga comprou?", porque
              ele faz essas peças, e eu só disse que ganhei.
            </Text>
            <Text style={styles.textFinal}>
              Feliz aniversário, querida Bella.
            </Text>
            <Text style={styles.textFinal}>28/09/2021</Text>
          </>
        ) : (
          <Button
            title="Abrir mensagem"
            onPress={() => handleMensage()}
            color="#bb8787"
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#dfd5d5',
  },
  containerAnimation: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  scroll: {
    flex: 1,
    backgroundColor: '#dfd5d5',
  },
  animation: {
    height: height(0.35),
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: '#858585',
    marginBottom: 20,
  },
  text: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    textAlign: 'justify',
  },
  textFinal: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    textAlign: 'right',
  },
});
