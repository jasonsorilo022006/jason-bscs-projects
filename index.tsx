import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type GroceryItem = {
  id: string;
  name: string;
  completed: boolean;
};

export default function HomeScreen() {
  const [input, setInput] = useState("");
  const [groceries, setGroceries] = useState<GroceryItem[]>([]);

  const addItem = () => {
    if (input.trim() === "") return;

    const newItem: GroceryItem = {
      id: Date.now().toString(),
      name: input.trim(),
      completed: false,
    };

    setGroceries([...groceries, newItem]);
    setInput("");
  };

  const toggleComplete = (id: string) => {
    setGroceries(
      groceries.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  const deleteItem = (id: string) => {
    setGroceries(
      groceries.filter((item) => item.id !== id)
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛒 Grocery Tracker</Text>

      <Text style={styles.subtitle}>
        Add and manage your grocery items
      </Text>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Enter grocery item..."
          value={input}
          onChangeText={setInput}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={addItem}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.listTitle}>
        Grocery List ({groceries.length})
      </Text>

      <FlatList
        data={groceries}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            No grocery items yet. Add one above!
          </Text>
        }
        renderItem={({ item }) => (
          <View style={styles.item}>
            <TouchableOpacity
              style={styles.itemName}
              onPress={() => toggleComplete(item.id)}
            >
              <Text
                style={[
                  styles.itemText,
                  item.completed && styles.completed,
                ]}
              >
                {item.completed ? "✓ " : "○ "}
                {item.name}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteItem(item.id)}
            >
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "violet",
    padding: 20,
    paddingTop: 60,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 25,
  },

  inputRow: {
    flexDirection: "row",
    marginBottom: 25,
  },

  input: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
  },

  addButton: {
    backgroundColor: "#2e86de",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginLeft: 8,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  listTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },

  emptyText: {
    textAlign: "center",
    color: "#777",
    marginTop: 30,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },

  itemName: {
    flex: 1,
  },

  itemText: {
    fontSize: 17,
  },

  completed: {
    textDecorationLine: "line-through",
    color: "#888",
  },

  deleteButton: {
    backgroundColor: "#e74c3c",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
});