import React, {useState} from 'react';
import {Alert, Button, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';


export default function App(){

  const [todos, setTodos] =useState([
    {text:'buy coffe',key:'1'},
    {text:'to homework',key:'2'},
    {text:'create an app',key:'3'}
    
  ]);

  const pressHandler = (key)=>{
    setTodos((prevTodos) => {
      return prevTodos.filter(todo=>todo.key != key)
    })
  }

  const submitHandler =(text)=>{

    if (text.length > 3 ){
      setTodos((prevTodos)=>{
        return [
          {text: text,key: Math.random().toString()},
          ...prevTodos
        ];
      });
    }else{
      Alert.alert('OPPS','TODSO MUST BE 3 CHARS LONG',[
        {text:'understood',onPress:()=> console.log('alert closed')}
      ]);
    }

    
  }

  return(

    // <Sandbox/>
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
          data={todos}
          renderItem={({item}) =>(
            <TodoItem item={item} pressHandler={pressHandler}/>

          )}
          
          />
          
        </View>
      </View>

    </View>
   
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    /* alignItems :'center',
    justifyContent :'center' */
  },
  content:{
    padding: 40,
    flex:1
    
  },
  list:{
    
    flex:1,
    marginTop: 20,
    // backgroundColor:'blue',
    
    
  }
});





//PİİZZA TRANSLATOR

/* const PizzaTranslator = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 50}}>
      <TextInput
        style={{height: 80}}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>
    </View>
  );
};

export default PizzaTranslator; */



//LİST BUTTON 

/* export default function App(){

  const[people,setPeople] = useState([
    {name: 'bihter', id:'1'},
    {name: 'shaun', id:'2'},
    {name: 'yoshi', id:'3'},
    {name: 'mario', id:'4'},
    {name: 'luigi', id:'5'},
    {name: 'peach', id:'6'},

  ]);
  
  const pressHandler =(id)=>{
    console.log(id);
    setPeople((prevPeople)=>{
      return prevPeople.filter(person => person.id != id)
    })
  }

  return(
    
    <View style = {styles.container}>


    <FlatList
    numColumns={2}
    keyExtractor={(item) => item.id}
    data={people}
    renderItem={({item})=>(
      <TouchableOpacity onPress={() => pressHandler(item.id)}>
        <Text style ={styles.item}>{item.name}</Text>
      </TouchableOpacity>
    )}

    /> 
      {<ScrollView>
      {people.map((item)=>{
        return(
        <View key ={item.key}>
            <Text style ={styles.item}>{item.name}</Text>
        </View>
      )
    })}
 </ScrollView> }
  /*  </View>
   
);
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    /* alignItems :'center',
    justifyContent :'center' 
  },
  input :{
    borderWidth: 1,
    borderColor: '#444',
    padding:8,
    margin: 10,
    width: 200,
  },
  item:{
    marginTop:24,
    padding:30,
    backgroundColor:'pink',
    fontSize:20,
    marginHorizontal:10,
    marginTop:24
  }
}); */