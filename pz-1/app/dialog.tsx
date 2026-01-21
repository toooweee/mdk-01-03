import React, { FC } from "react";
import { View, Text, Modal, StyleSheet, Pressable } from "react-native";

interface DialogProps {
  visible: boolean;
  onClose: () => void;
}

const Dialog: FC<DialogProps> = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>Modal</Text>

          <Pressable onPress={onClose} style={styles.button}>
            <Text style={styles.buttonText}>Закрыть</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modal: {
    backgroundColor: "#25292e",
    padding: 16,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  title: {
    color: "white",
    fontSize: 18,
    marginBottom: 12,
  },
  button: {
    alignSelf: "flex-end",
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  buttonText: {
    color: "#4da6ff",
    fontSize: 16,
  },
});

export default Dialog;
