import React, { createContext, useContext, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// PIZZA MENU

const pizzas = [
  {
    id: '1',
    name: 'Pepperoni Pizza',
    description: 'Pepperoni, cheese and tomato sauce',
    price: 299,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500',
  },
  {
    id: '2',
    name: 'Hawaiian Pizza',
    description: 'Ham, pineapple and mozzarella',
    price: 279,
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500',
  },
  {
    id: '3',
    name: 'Cheese Pizza',
    description: 'Extra cheese and tomato sauce',
    price: 249,
    image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?w=500',
  },
  {
    id: '4',
    name: 'Vegetarian Pizza',
    description: 'Fresh vegetables and cheese',
    price: 269,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
  },
  {
    id: '5',
    name: 'BBQ Chicken Pizza',
    description: 'Chicken, BBQ sauce and mozzarella',
    price: 329,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500',
  },
  {
    id: '6',
    name: 'Meat Lovers Pizza',
    description: 'Pepperoni, ham, bacon and sausage',
    price: 359,
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500',
  },
  {
    id: '7',
    name: 'All Cheese Pizza',
    description: 'Mozzarella, cheddar and parmesan',
    price: 319,
    image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?w=500',
  },
  {
    id: '8',
    name: 'Margherita Pizza',
    description: 'Fresh tomatoes, basil and mozzarella',
    price: 259,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500',
  },
  {
    id: '9',
    name: 'Spicy Pizza',
    description: 'Spicy pepperoni, chili and cheese',
    price: 309,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500',
  },
  {
    id: '10',
    name: 'Supreme Pizza',
    description: 'Pepperoni, vegetables, sausage and cheese',
    price: 349,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
  },
];


type Pizza = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

type Order = Pizza & {
  quantity: number;
};

// CREATE CONTEXT
type PizzaContextType = {
  orders: Order[];
  addOrder: (pizza: Pizza) => void;
  removeOrder: (id: string) => void;
  total: number;
  saving: boolean;
};

const PizzaContext = createContext<PizzaContextType | undefined>(undefined);

// PROVIDER
function PizzaProvider({ children }: { children: React.ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([]);
  const [saving, setSaving] = useState(false);

  const addOrder = (pizza: Pizza) => {
    setSaving(true);

    setOrders(previous => {
      const existing = previous.find(item => item.id === pizza.id);

      if (existing) {
        return previous.map(item =>
          item.id === pizza.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previous, { ...pizza, quantity: 1 }];
    });

    setTimeout(() => setSaving(false), 1000);
  };

  const removeOrder = (id: string) => {
    setOrders(previous => previous.filter(item => item.id !== id));
  };

  const total = orders.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  return (
    <PizzaContext.Provider
      value={{ orders, addOrder, removeOrder, total, saving }}
    >
      {children}
    </PizzaContext.Provider>
  );
}

// USE CONTEXT
function usePizza() {
  const context = useContext(PizzaContext);

  if (!context) {
    throw new Error('usePizza must be inside PizzaProvider');
  }

  return context;
}

// TAB 1: MENU
function MenuScreen() {
  const { addOrder, orders, saving } = usePizza();

  const count = orders.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🍕 Pizza ni Jason </Text>
      <Text style={styles.subtitle}>Fresh Piza marasa pa, happy moments!</Text>

      <Text style={styles.cartInfo}>My Orders: {count}</Text>

      {saving && (
        <View style={styles.loading}>
          <ActivityIndicator color="#E63920" />
          <Text style={{ color: '#E63920' }}>Saving order...</Text>
        </View>
      )}

      <FlatList
        data={pizzas}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.pizzaImage} />

            <View style={styles.details}>
              <Text style={styles.pizzaName}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.price}>₱{item.price}</Text>

              <TouchableOpacity
                style={styles.button}
                onPress={() => addOrder(item)}
              >
                <Text style={styles.buttonText}>+ Add to Order</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

// TAB 2: ORDERS
function OrdersScreen() {
  const { orders, total, removeOrder } = usePizza();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Orders 🛒</Text>
      <Text style={styles.subtitle}>Your selected pizzas</Text>

      {orders.length === 0 ? (
        <Text style={styles.empty}>🍕 No orders yet!</Text>
      ) : (
        <>
          <FlatList
            data={orders}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.orderCard}>
                <Image source={{ uri: item.image }} style={styles.orderImage} />

                <View style={{ flex: 1 }}>
                  <Text style={styles.pizzaName}>{item.name}</Text>
                  <Text style={styles.description}>
                    ₱{item.price} x {item.quantity}
                  </Text>
                  <Text style={styles.price}>
                    ₱{item.price * item.quantity}
                  </Text>
                </View>

                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => removeOrder(item.id)}
                >
                  <Text style={styles.buttonText}>Remove</Text>
                </TouchableOpacity>
              </View>
            )}
          />

          <View style={styles.totalCard}>
            <Text style={styles.totalLabel}>Total Amount</Text>
            <Text style={styles.totalPrice}>₱{total.toLocaleString('en-PH')}</Text>
          </View>
        </>
      )}
    </View>
  );
}

// NAVIGATION
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PizzaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#E63920' },
            headerTintColor: '#fff',
            tabBarActiveTintColor: '#E63920',
          }}
        >
          <Tab.Screen
            name="Menu"
            component={MenuScreen}
            options={{
              title: 'Pizza Menu',
              tabBarIcon: () => <Text>🍕</Text>,
            }}
          />

          <Tab.Screen
            name="Orders"
            component={OrdersScreen}
            options={{
              title: 'My Orders',
              tabBarIcon: () => <Text>🛒</Text>,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PizzaProvider>
  );
}

// STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
    padding: 16,
  },
  heading: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#E63920',
    marginTop: 12,
  },
  subtitle: {
    color: '#777',
    marginBottom: 15,
  },
  cartInfo: {
    fontSize: 16,
    color: '#E63920',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 3,
  },
  pizzaImage: {
    width: '100%',
    height: 160,
  },
  details: {
    padding: 14,
  },
  pizzaName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 13,
    color: '#777',
    marginTop: 4,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E63920',
    marginTop: 7,
  },
  button: {
    backgroundColor: '#E63920',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  loading: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  empty: {
    textAlign: 'center',
    marginTop: 70,
    color: '#888',
    fontSize: 16,
  },
  orderCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 12,
    marginBottom: 12,
    gap: 10,
    elevation: 2,
  },
  orderImage: {
    width: 75,
    height: 75,
    borderRadius: 10,
  },
  removeButton: {
    backgroundColor: '#D62828',
    padding: 9,
    borderRadius: 7,
  },
  totalCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginVertical: 12,
  },
  totalLabel: {
    fontSize: 16,
    color: '#777',
  },
  totalPrice: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#E63920',
    marginTop: 5,
  },
});
