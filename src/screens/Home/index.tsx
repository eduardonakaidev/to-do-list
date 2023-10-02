import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { Task } from "../../components/Task";

export function Home(){

    const[tasks,setTasks] = useState(['']);
    const[taskcontent,setTaskcontent] = useState('');

    function handleTaskAdd(){
        if(tasks.includes(taskcontent)){
            return Alert.alert("Tarefa ja existe","Já existe essa tarefa na lista");
        }
        setTasks(prevState=>[...prevState,taskcontent]);
        setTaskcontent('');
    }
    return(
        <View style={styles.container}>
            <View style={styles.form}>
                <TextInput style={styles.input} placeholder="adicione uma nova tarefa"placeholderTextColor="#808080" onChangeText={setTaskcontent}/>
                <TouchableOpacity style={styles.buttonAddContainer} onPress={handleTaskAdd}>
                    <Text style={styles.buttonAddContainerText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.textCriadas}>
                    Criadas
                </Text>
                <Text style={styles.textConcluidas}>
                    Concluídas
                </Text>
            </View>
            <FlatList
                data={tasks}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Task
                        key={item}
                        />
                )}

                showsVerticalScrollIndicator={false}

                ListEmptyComponent={()=>(
                    <View style={styles.EmplyContainer}>
                    <Text style={styles.ListEmplyTextFirst}>
                        Você ainda não tem tarefas cadastradas
                    </Text>
                    <Text style={styles.ListEmplyTextSecond}>
                            Crie Tarefas e organize seus itens a fazer
                    </Text>
                  </View>  
                )}
            />
        </View>
    )
}