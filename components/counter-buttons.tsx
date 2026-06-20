import { Pressable, StyleSheet, View } from 'react-native';
import { useEffect, useRef } from 'react';

import { ThemedText } from '@/components/themed-text';

interface CounterButtonsProps {
  onAdd: () => void;
  onMinus: () => void;
  onReset: () => void;
}

type ActiveAction = 'add' | 'minus' | null;

export function CounterButtons({ onAdd, onMinus, onReset }: CounterButtonsProps) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const activeAction = useRef<ActiveAction>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const stopRepeat = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    activeAction.current = null;
  };

  const startRepeat = (action: ActiveAction) => {
    activeAction.current = action;
    timeoutRef.current = setTimeout(() => {
      if (action === 'add') {
        onAdd();
      } else if (action === 'minus') {
        onMinus();
      }
      intervalRef.current = setInterval(() => {
        if (action === 'add') {
          onAdd();
        } else if (action === 'minus') {
          onMinus();
        }
      }, 120);
    }, 350);
  };

  const handleRelease = () => {
    if (timeoutRef.current && !intervalRef.current && activeAction.current) {
      if (activeAction.current === 'add') {
        onAdd();
      } else if (activeAction.current === 'minus') {
        onMinus();
      }
    }
    stopRepeat();
  };

  return (
    <View style={styles.buttonGroup}>
      <Pressable
        style={[styles.button, styles.addButton]}
        onPressIn={() => startRepeat('add')}
        onPressOut={handleRelease}
      >
        <ThemedText style={styles.buttonText}>  Add Count ➕ </ThemedText>
      </Pressable>
      <Pressable
        style={[styles.button, styles.minusButton]}
        onPressIn={() => startRepeat('minus')}
        onPressOut={handleRelease}
      >
        <ThemedText style={styles.buttonText}>   Minus Count ➖ </ThemedText>
      </Pressable>
      <Pressable style={[styles.button, styles.resetButton]} onPress={onReset}>
        <ThemedText style={styles.buttonText}>   Reset Count 🔁 </ThemedText>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonGroup: {
    gap: 10,
  },
  button: {
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#2ecc71',
  },
  minusButton: {
    backgroundColor: '#3b82f6',
  },
  resetButton: {
    backgroundColor: '#6d6b83',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '800',
    fontSize: 13,
  },
});


