import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { CounterButtons } from '@/components/counter-buttons';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

function CounterDisplay({
  count,
  onAdd,
  onMinus,
  onReset,
}: {
  count: number;
  onAdd: () => void;
  onMinus: () => void;
  onReset: () => void;
}) {
  return (
    <View style={styles.childCard}>
      <View style={styles.childHeaderRow}>

      </View>

      <View style={styles.countCard}>
        <View style={[styles.propBox, styles.topPropBox]}>

        </View>

        <View style={styles.countContainer}>
          <ThemedText style={styles.childTitle}>COUNTER DISPLAY</ThemedText>
          <ThemedText style={styles.childCount}>{count}</ThemedText>
        </View>

        <View style={[styles.propBox, styles.bottomPropBox]}>
        </View>
      </View>

      <CounterButtons onAdd={onAdd} onMinus={onMinus} onReset={onReset} />
    </View>
  );
}

export default function HomeScreen() {
  const [count, setCount] = useState(100);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedView style={styles.screenShell}>

        <View style={styles.parentStateCard}>
          <ThemedText style={styles.parentLabel}>STATE LOCKER</ThemedText>
          <ThemedText style={styles.parentCount}>{count}</ThemedText>
        </View>

        <CounterDisplay
          count={count}
          onAdd={() => setCount((value) => value + 1)}
          onMinus={() => setCount((value) => value - 1)}
          onReset={() => setCount(100)}
        />
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 18,
    paddingHorizontal: 8,
    paddingBottom: 8,
    backgroundColor: '#120d26',
  },
  screenShell: {
    width: '100%',
    maxWidth: 420,
    alignItems: 'stretch',
    backgroundColor: '#161239',
    borderRadius: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: '#3e3c7a',
    marginTop: 150,
  },
  screenTop: {
    color: '#f8f4ff',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 4,
  },
  screenSubtitle: {
    color: '#b3b1d4',
    fontSize: 10,
    marginBottom: 8,
    lineHeight: 14,
  },
  parentStateCard: {
    backgroundColor: '#2c2763',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#4f4a9d',
  },
  parentLabel: {
    color: '#c9d1ff',
    fontSize: 9,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 3,
  },
  parentCount: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '900',
    textShadowColor: 'rgba(255,255,255,0.25)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  childCard: {
    backgroundColor: '#1b1840',
    borderRadius: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#3e3c7a',
    marginBottom: 8,
  },
  childHeaderRow: {
    marginBottom: 4,
  },
  childTitle: {
    color: '#f3edf5',
    fontSize: 12,
    fontWeight: '800',
    marginBottom: 2,
  },
  childSubtitle: {
    color: '#a29fd1',
    fontSize: 9,
  },
  childBody: {
    color: '#dcd7ff',
    fontSize: 11,
    marginBottom: 8,
  },
  propBox: {
    backgroundColor: '#272159',
    padding: 6,
  },
  topPropBox: {
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  bottomPropBox: {
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  },
  propLabel: {
    color: '#c2c0ff',
    fontSize: 8,
    fontWeight: '800',
    marginBottom: 2,
  },
  propMeta: {
    color: '#9a97c6',
    fontSize: 8,
  },
  countCard: {
    borderRadius: 14,
    overflow: 'hidden',
    marginBottom: 8,
    backgroundColor: '#272159',
  },
  countContainer: {
    backgroundColor: '#1e173e',
    paddingVertical: 14,
    alignItems: 'center',
  },
  childCount: {
    color: '#fefefe',
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
  },
});
