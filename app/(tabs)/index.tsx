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
        <ThemedText style={styles.childTitle}>THIS IS THE CHILD COMPONENT</ThemedText>
        <ThemedText style={styles.childSubtitle}>(CounterDisplay)</ThemedText>
      </View>
      <ThemedText style={styles.childBody}>I'm the Child Component</ThemedText>

      <View style={styles.countCard}>
        <View style={[styles.propBox, styles.topPropBox]}>
          <ThemedText style={styles.propLabel}>PROPS DATA</ThemedText>
          <ThemedText style={styles.propMeta}>(Comes from the Parent State)</ThemedText>
        </View>

        <View style={styles.countContainer}>
          <ThemedText style={styles.childCount}>{count}</ThemedText>
        </View>

        <View style={[styles.propBox, styles.bottomPropBox]}>
          <ThemedText style={styles.propLabel}>PROPS FUNCTION</ThemedText>
          <ThemedText style={styles.propMeta}>Triggers Parent State</ThemedText>
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
        <ThemedText style={styles.screenTop}>Parent Component</ThemedText>
        <ThemedText style={styles.screenSubtitle}>The Parent Component that has state locker and child component.</ThemedText>

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
    padding: 20,
    backgroundColor: '#120d26',
  },
  screenShell: {
    flex: 1,
    backgroundColor: '#161239',
    borderRadius: 30,
    padding: 24,
    borderWidth: 1,
    borderColor: '#3e3c7a',
  },
  screenTop: {
    color: '#f8f4ff',
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 8,
  },
  screenSubtitle: {
    color: '#b3b1d4',
    fontSize: 14,
    marginBottom: 24,
  },
  parentStateCard: {
    backgroundColor: '#2c2763',
    borderRadius: 24,
    paddingVertical: 20,
    paddingHorizontal: 18,
    alignItems: 'center',
    marginBottom: 26,
    borderWidth: 1,
    borderColor: '#4f4a9d',
  },
  parentLabel: {
    color: '#9da7ff',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1.1,
    marginBottom: 10,
  },
  parentCount: {
    color: '#ffffff',
    fontSize: 62,
    fontWeight: '900',
  },
  childCard: {
    backgroundColor: '#1b1840',
    borderRadius: 28,
    padding: 22,
    borderWidth: 1,
    borderColor: '#3e3c7a',
  },
  childHeaderRow: {
    marginBottom: 12,
  },
  childTitle: {
    color: '#f3edf5',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 2,
  },
  childSubtitle: {
    color: '#a29fd1',
    fontSize: 13,
  },
  childBody: {
    color: '#dcd7ff',
    fontSize: 15,
    marginBottom: 18,
  },
  propBox: {
    backgroundColor: '#272159',
    padding: 14,
  },
  topPropBox: {
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },
  bottomPropBox: {
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
  
  },
  propLabel: {
    color: '#c2c0ff',
    fontSize: 12,
    fontWeight: '800',
    marginBottom: 4,
  },
  propMeta: {
    color: '#9a97c6',
    fontSize: 12,
  },
  countCard: {
    borderRadius: 22,
    overflow: 'hidden',
    marginBottom: 20,
    backgroundColor: '#272159',
  },
  countContainer: {
    backgroundColor: '#1e173e',
    paddingVertical: 40,
    alignItems: 'center',
  },
  childCount: {
    color: '#fefefe',
    fontSize: 82,
    fontWeight: '900',
    textAlign: 'center',
  },
});
