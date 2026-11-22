import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Stack = createNativeStackNavigator();

// HOME SCREEN
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>☕</Text>
      <Text style={styles.title}>Coffee Shop</Text>
      <Text style={styles.subtitle}>
        Welcome to our Coffee Shop!
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Coffee Menu')}
      >
        <Text style={styles.buttonText}>View Coffee Menu</Text>
      </TouchableOpacity>
    </View>
  );
}

// COFFEE MENU SCREEN
function CoffeeMenuScreen({ navigation }) {
  const coffees = [
    {
      name: 'Cappuccino',
      price: '₱120',
      description: 'A creamy coffee made with espresso and steamed milk.'
    },
    {
      name: 'Caramel Macchiato',
      price: '₱140',
      description: 'Espresso mixed with steamed milk and caramel flavor.'
    },
    {
      name: 'Iced Latte',
      price: '₱130',
      description: 'Cold espresso combined with milk and ice.'
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>☕ Coffee Menu</Text>

      {coffees.map((coffee, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() =>
            navigation.navigate('Coffee Details', {
              name: coffee.name,
              price: coffee.price,
              description: coffee.description
            })
          }
        >
          <Text style={styles.coffeeName}>{coffee.name}</Text>
          <Text style={styles.price}>{coffee.price}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

// COFFEE DETAILS SCREEN
function CoffeeDetailsScreen({ route, navigation }) {
  const { name, price, description } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>☕</Text>

      <Text style={styles.title}>{name}</Text>

      <Text style={styles.price}>{price}</Text>

      <Text style={styles.description}>
        {description}
      </Text>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

// MAIN APP
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6F4E37'
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="Coffee Menu"
          component={CoffeeMenuScreen}
        />

        <Stack.Screen
          name="Coffee Details"
          component={CoffeeDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },

  logo: {
    fontSize: 70,
    marginBottom: 10
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#6F4E37',
    marginBottom: 10
  },

  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center'
  },

  button: {
    backgroundColor: '#6F4E37',
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 10
  },

  backButton: {
    backgroundColor: '#6F4E37',
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 10,
    marginTop: 30
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold'
  },

  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 8,
    borderRadius: 12,
    elevation: 3
  },

  coffeeName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6F4E37'
  },

  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#A0522D',
    marginTop: 5
  },

  description: {
    fontSize: 17,
    color: '#555',
    textAlign: 'center',
    lineHeight: 25,
    marginTop: 15
  }
});